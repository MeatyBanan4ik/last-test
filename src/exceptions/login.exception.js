/**
 * internal exceptions
 */
import UnauthorizedException from './unauthorized.exception.js';

export default class LoginException extends UnauthorizedException {
	constructor() {
		super('Email or password is incorrect.');
	}
}
