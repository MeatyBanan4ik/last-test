/**
 * internal services
 */
import TaskService from '../../services/task.service.js';

export default class TaskHttpHandler {
	constructor() {
		this.service = new TaskService();
	}

	async list(req, res) {
		res._success({ data: await this.service.all() });
	}
}
