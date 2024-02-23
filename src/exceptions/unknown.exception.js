/**
 * internal exceptions
 */
import UnauthorizedException from './unauthorized.exception.js';

export default class UnknownException extends UnauthorizedException {
	constructor() {
		super('Unknown.');
	}
}
