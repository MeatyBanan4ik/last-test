import BaseSeeder from './base.seeder.js';

import TaskModel from '../models/task.model.js';

import TaskService from '../../services/task.service.js';

const tasks = [
	{
		title: 'Task 1',
		description: 'Lorem ipsum dolor sit amet',
		assignee: 'Alice',
		dueDate: new Date(2023, 3, 10),
		status: 'open',
	},
	{
		title: 'Task 2',
		description: 'Consectetur adipiscing elit',
		assignee: 'Bob',
		dueDate: new Date(2023, 3, 15),
		status: 'in progress',
	},
	{
		title: 'Task 3',
		description: 'Sed do eiusmod tempor incididunt',
		assignee: 'Charlie',
		dueDate: new Date(2023, 3, 18),
		status: 'completed',
	},
	{
		title: 'Task 4',
		description: 'Ut enim ad minim veniam',
		assignee: 'Alice',
		dueDate: new Date(2023, 3, 20),
		status: 'open',
	},
	{
		title: 'Task 5',
		description: 'Duis aute irure dolor in reprehenderit',
		assignee: 'Dave',
		dueDate: new Date(2023, 3, 27),
		status: 'in progress',
	},
	{
		title: 'Task 6',
		description: 'Excepteur sint occaecat cupidatat non proident',
		assignee: 'Eva',
		dueDate: new Date(2023, 4, 5),
		status: 'open',
	},
	{
		title: 'Task 7',
		description: 'Sunt in culpa qui officia deserunt mollit',
		assignee: 'Frank',
		dueDate: new Date(2023, 4, 8),
		status: 'in progress',
	},
	{
		title: 'Task 8',
		description: 'Excepteur sint occaecat cupidatat non proident',
		assignee: 'Grace',
		dueDate: new Date(2023, 4, 12),
		status: 'completed',
	},
	{
		title: 'Task 9',
		description: 'Sunt in culpa qui officia deserunt mollit',
		assignee: 'Alice',
		dueDate: new Date(2023, 4, 15),
		status: 'open',
	},
	{
		title: 'Task 10',
		description: 'Lorem ipsum dolor sit amet',
		assignee: 'Helen',
		dueDate: new Date(2023, 4, 20),
		status: 'in progress',
	},
	{
		title: 'Task 11',
		description: 'Adipiscing elit, sed do eiusmod tempor incididunt',
		assignee: 'Isaac',
		dueDate: new Date(2023, 2, 5),
		status: 'completed',
	},
	{
		title: 'Task 12',
		description: 'Dolore magna aliqua. Ut enim ad minim veniam',
		assignee: 'Jane',
		dueDate: new Date(2023, 2, 10),
		status: 'open',
	},
	{
		title: 'Task 13',
		description: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
		assignee: 'Kevin',
		dueDate: new Date(2023, 2, 15),
		status: 'in progress',
	},
	{
		title: 'Task 14',
		description:
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
		assignee: 'Alice',
		dueDate: new Date(2023, 2, 20),
		status: 'open',
	},
	{
		title: 'Task 15',
		description:
			'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
		assignee: 'Linda',
		dueDate: new Date(2023, 2, 25),
		status: 'completed',
	},
	{
		title: 'Task 16',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		assignee: 'Mike',
		dueDate: new Date(2023, 3, 5),
		status: 'open',
	},
	{
		title: 'Task 17',
		description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
		assignee: 'Nancy',
		dueDate: new Date(2023, 3, 8),
		status: 'in progress',
	},
	{
		title: 'Task 18',
		description:
			'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
		assignee: 'Oliver',
		dueDate: new Date(2023, 3, 12),
		status: 'completed',
	},
	{
		title: 'Task 19',
		description:
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
		assignee: 'Paula',
		dueDate: new Date(2023, 3, 16),
		status: 'open',
	},
	{
		title: 'Task 20',
		description:
			'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
		assignee: 'Quincy',
		dueDate: new Date(2023, 3, 22),
		status: 'in progress',
	},
];

class TaskSeeder extends BaseSeeder {
	static async up() {
		const taskService = new TaskService();

		for (const task of tasks) {
			const taskModel = await TaskModel.findOne({ title: task.title });

			if (taskModel) {
				this.message(`${task.title} task exists`);
				continue;
			}

			await taskService.create(task);

			this.message(`${task.title} task created`);
		}

		return void 0;
	}
}

export default TaskSeeder;
