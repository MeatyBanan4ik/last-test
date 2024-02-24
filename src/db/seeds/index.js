import BaseSeeder from './base.seeder.js';
import TaskSeeder from './task.seeder.js';

export default async () => {
	try {
		BaseSeeder.message('Start seeder');

		await TaskSeeder.up();

		BaseSeeder.message('Seeder completed');

		process.exit();
	} catch (e) {
		BaseSeeder.message(e.toString(), 'trace');

		process.exit(0);
	}
};
