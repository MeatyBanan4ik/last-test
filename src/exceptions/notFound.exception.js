/**
 * internal exceptions
 */
import HttpException from './http.exception.js';

export default class NotFoundException extends HttpException {
	status = 404;

	constructor(message = 'Not Found.') {
		super(message);
	}
}
