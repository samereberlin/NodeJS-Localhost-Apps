global.fs = require('fs');
global.i18n = require('./.utils/i18n');
global.path = require('path');
global.sendError = require('./.utils/sendError');
global.sendFile = require('./.utils/sendFile');

const apps = global.fs
	.readdirSync('./', {withFileTypes: true})
	.filter((app) => app.name[0] !== '.' && app.isDirectory())
	.map((app) => app.name);
const list = require('./.templates/list')({label: global.i18n.appList, items: apps});
const html = require('./.templates/html')({title: global.i18n.appList, body: list});

const server = require('http').createServer((req, res) => {
	console.log(req.method, req.url);
	try {
		if (req.url === '/') {
			res.statusCode = 200;
			res.setHeader('Content-Type', 'text/html');
			res.end(html);
		} else if (req.url[1] === '?') {
			// TODO: implement query parameter processing.
			global.sendError(req, res, 400);
		} else {
			const indexOfSlash = req.url.indexOf('/', 1);
			const app = req.url.substring(1, indexOfSlash > 0 ? indexOfSlash : req.url.length);
			if (apps.includes(app)) {
				require(`./${app}/index.js`)(req, res);
			} else {
				global.sendFile(req, res, global.path.join(__dirname, '.public', req.url));
			}
		}
	} catch (error) {
		global.sendError(req, res, 500);
	}
});

server.listen(8080, '127.0.0.1', () => {
	console.log(`Server running at http://localhost:8080/`);
});
