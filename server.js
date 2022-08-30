global.i18n = require('./.utils/i18n');
const fs = require('fs');
const path = require('path');

const apps = fs
	.readdirSync('./', {withFileTypes: true})
	.filter((app) => app.name[0] !== '.' && app.isDirectory())
	.map((app) => app.name);
const list = require('./.templates/list')({label: global.i18n.appList, items: apps});
const html = require('./.templates/html')({title: global.i18n.appList, body: list});

const server = require('http').createServer((req, res) => {
	try {
		if (req.url === '/') {
			res.statusCode = 200;
			res.setHeader('Content-Type', 'text/html');
			res.end(html);
		} else if (req.url[1] === '?') {
			// TODO: implement query parameter processing.
			res.statusCode = 400;
			res.end('ERROR 400: Bad Request.');
		} else {
			const indexOfSlash = req.url.indexOf('/', 1);
			const app = req.url.substring(1, indexOfSlash > 0 ? indexOfSlash : req.url.length);
			if (apps.includes(app)) {
				require(`./${app}/index.js`)(req, res);
			} else if (fs.existsSync(path.join(__dirname, '.public', req.url))) {
				// TODO: Implement static file serving.
				res.statusCode = 200;
				res.end('Yes, the file exists.');
			} else {
				res.statusCode = 404;
				res.end('ERROR 404: Not Found.');
			}
		}
	} catch (error) {
		res.statusCode = 500;
		res.end('ERROR 500: Internal Server Error.');
	}
});

server.listen(3000, () => {
	console.log(`Server running at http://localhost:3000/`);
});
