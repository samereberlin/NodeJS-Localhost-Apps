module.exports = (req, res, file) => {
	if (global.fs.existsSync(file)) {
		// TODO: Implement static file serving.
		res.statusCode = 200;
		res.end('Yes, the file exists.');
	} else {
		global.sendError(req, res, 404);
	}
};
