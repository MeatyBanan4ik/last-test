/**
 * internal exceptions
 */
import HttpException from './http.exception.js';

export default class ValidationException extends HttpException {
	status = 422;

	constructor(errors) {
		super('Validation Error.');
		this.errors = errors.all();
	}
}
