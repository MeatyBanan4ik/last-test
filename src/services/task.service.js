/**
 * internal services
 */
import Service from './service.js';

/**
 * internal models
 */
import TaskModel from '../db/models/task.model.js';
import { dateDiffInWeek } from '../helpers/date.helper.js';

export default class TaskService extends Service {
	constructor() {
		super(TaskModel);
	}

	async allNode() {
		const models = await this.Model.find({}).sort({ dueDate: 0 }).exec();
		const minDate = models[0].dueDate;

		return models.reduce(
			(obj, item) => {
				const { status } = item;
				const taskStatusNum = (obj.taskStatus[status] || 0) + 1;

				const { assignee } = item;
				const assigneeNum = (obj.assigneeStats[assignee] || 0) + 1;

				const weekDiff = dateDiffInWeek(minDate, item.dueDate) + 1;
				const week = `week${weekDiff}`;
				const weekNum = (obj.dueDateStats[week] || 0) + 1;

				return {
					taskStatus: { ...obj.taskStatus, [status]: taskStatusNum },
					assigneeStats: { ...obj.assigneeStats, [assignee]: assigneeNum },
					dueDateStats: { ...obj.dueDateStats, [week]: weekNum },
				};
			},
			{ taskStatus: {}, assigneeStats: {}, dueDateStats: {} },
		);
	}

	async all() {
		const query = [
			{
				$facet: {
					dueDates: [
						{
							$group: {
								_id: null,
								minDate: { $min: '$dueDate' },
								dueDates: { $push: '$dueDate' },
							},
						},
						{
							$project: {
								dueDates: {
									$map: {
										input: '$dueDates',
										as: 'd',
										in: {
											$concat: [
												'week',
												{
													$toString: {
														$add: [
															1,
															{
																$round: {
																	$divide: [{ $subtract: ['$$d', '$minDate'] }, 1000 * 60 * 60 * 24 * 7],
																},
															},
														],
													},
												},
											],
										},
									},
								},
							},
						},
						{ $unwind: '$dueDates' },
						{
							$group: {
								_id: '$dueDates',
								count: { $sum: 1 },
							},
						},
						{
							$group: {
								_id: null,
								value: {
									$mergeObjects: {
										$arrayToObject: [[{ k: '$_id', v: '$count' }]],
									},
								},
							},
						},
					],
					statuses: [
						{
							$group: {
								_id: '$status',
								count: { $sum: 1 },
							},
						},
						{
							$group: {
								_id: null,
								value: {
									$mergeObjects: {
										$arrayToObject: [[{ k: '$_id', v: '$count' }]],
									},
								},
							},
						},
					],
					assignees: [
						{
							$group: {
								_id: '$assignee',
								count: { $sum: 1 },
							},
						},
						{
							$group: {
								_id: null,
								value: {
									$mergeObjects: {
										$arrayToObject: [[{ k: '$_id', v: '$count' }]],
									},
								},
							},
						},
					],
				},
			},
			{
				$project: {
					dueDateStats: { $first: '$dueDates.value' },
					taskStatus: { $first: '$statuses.value' },
					assigneeStats: { $first: '$assignees.value' },
				},
			},
		];

		return (await this.Model.aggregate(query))[0] || {};
	}
}
