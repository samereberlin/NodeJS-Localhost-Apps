global.i18n = require('./.utils/i18n');

const apps = require('fs')
	.readdirSync('./', {withFileTypes: true})
	.filter((app) => app.name[0] !== '.' && app.isDirectory())
	.map((app) => app.name);
const list = require('./.templates/list')({label: global.i18n.appList, items: apps});
const html = require('./.templates/html')({title: global.i18n.appList, body: list});

const server = require('http').createServer((req, res) => {
	try {
		const indexOfSlash = req.url.indexOf('/', 1);
		const app = req.url.substring(1, indexOfSlash > 0 ? indexOfSlash : req.url.length);
		if (apps.includes(app)) {
			require(`./${app}/foo/index.js`)(req, res);
		} else {
			res.statusCode = 200;
			res.setHeader('Content-Type', 'text/html');
			res.end(html);
		}
	} catch (error) {
		res.statusCode = 500;
		res.end('Internal server error.');
	}
});

server.listen(3000, () => {
	console.log(`Server running at http://localhost:3000/`);
});
