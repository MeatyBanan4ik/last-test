export default class Service {
	constructor(Model) {
		this.Model = Model;
	}

	async all({ filters = {}, limit = 10, skip = 0, sort = { createdAt: -1 } }) {
		const data = (
			await this.Model.aggregate([
				{ $match: filters },
				{ $sort: sort },
				{
					$facet: {
						total: [{ $group: { _id: null, total: { $sum: 1 } } }],
						items: [{ $skip: Number(skip) }, { $limit: Number(limit) }],
					},
				},
				{ $unwind: '$total' },
				{
					$project: {
						total: '$total.total',
						items: '$items',
					},
				},
			])
		)[0] || { total: 0, items: [] };

		return { ...data, items: data.items.map(i => new this.Model(i)) };
	}

	async create(data) {
		return this.Model.create(data);
	}

	async get(id) {
		return this.Model.findById(id);
	}

	async update(id, data, options = { new: true }) {
		return this.Model.findByIdAndUpdate(id, data, options);
	}

	async replace(id, data, options = { new: true }) {
		return this.Model.findOneAndReplace({ _id: id }, data, options);
	}

	async delete(id) {
		return Boolean((await this.Model.deleteOne({ _id: id })).deletedCount);
	}
}
