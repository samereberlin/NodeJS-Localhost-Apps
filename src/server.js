global.i18n = require('./utils/i18n');

const apps = require('fs').readdirSync('./src/apps/');
const list = require('./templates/list')({label: global.i18n.appList, items: apps});
const html = require('./templates/html')({title: global.i18n.appList, body: list});

const server = require('http').createServer((req, res) => {
	// console.log("====> req:", req);
	// console.log("====> apps:", apps);

	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	res.end(html);
});

server.listen(3000, () => {
	console.log(`Server running at http://localhost:3000/`);
});
