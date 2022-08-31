module.exports = (req, res, errorCode) => {
	res.statusCode = errorCode;
	console.error(global.i18n[errorCode.toString()]);
	res.end(global.i18n[errorCode.toString()]);
};
