/**
 * internal exceptions
 */
import HttpException from './http.exception.js';

export default class ForbiddenException extends HttpException {
	status = 403;

	constructor(message = 'Forbidden.') {
		super(message);
	}
}
