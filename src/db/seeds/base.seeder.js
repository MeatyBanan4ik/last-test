import log4js from 'log4js';

const logger = log4js.getLogger('seeder');

class BaseSeeder {
	static async up() {
		throw Error('abstract method');
	}

	static message(text = '', type = 'info') {
		logger[type](text);
	}
}

export default BaseSeeder;
