module.exports = (req, res, html) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	res.end(html);
};
