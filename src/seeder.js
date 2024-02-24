import logger from 'log4js';
import Mongoose from 'mongoose';

import seeder from './db/seeds/index.js';
import config from '../config/config.js';

async function init() {
	// configure logger
	logger.configure(config.logger);

	// init DB
	await Mongoose.connect(config.db);

	// start seeds
	await seeder();
}

init();
