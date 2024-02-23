export default class HttpException extends Error {
	status = 500;

	constructor(message) {
		super(message);
		this.message = message;
	}
}
