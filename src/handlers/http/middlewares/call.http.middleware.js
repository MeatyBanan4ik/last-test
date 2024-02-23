export default (HttpHandler, method) => async (req, res, next) => {
	try {
		const httpHandler = new HttpHandler();
		await httpHandler[method](req, res, next);
	} catch (e) {
		next(e);
	}
};
