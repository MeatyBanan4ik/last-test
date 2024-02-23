/**
 * internal exceptions
 */
import HttpException from './http.exception.js';

export default class UnauthorizedException extends HttpException {
	status = 401;

	constructor(message) {
		super(message || 'Unauthorized.');
	}
}
