global.fs = require('fs');
global.path = require('path');

// global.dirRoot = __dirname;
global.themeDark = false;

global.i18n = require('./utils/i18n');
global.render = require('./render');
global.sendError = require('./utils/sendError');
global.sendFile = require('./utils/sendFile');
global.sendHtml = require('./utils/sendHtml');

const apps = require('./apps')();
const list = global.render('list.html', apps);
const navbar = global.render('navbar.html', {icon: '/favicon.ico', label: global.i18n.appName});
const html = global.render('html.html', {title: global.i18n.appName, body: `${navbar}${list}`});

const server = require('http').createServer((req, res) => {
	console.log(req.method, req.url);
	try {
		if (req.url === '/') {
			global.sendHtml(req, res, html);
		} else if (req.url[1] === '?') {
			// TODO: implement query parameter processing.
			global.sendError(req, res, 400);
		} else {
			const indexOfSlash = req.url.indexOf('/', 1);
			const appId = req.url.substring(1, indexOfSlash > 0 ? indexOfSlash : req.url.length);
			const app = apps.find((app) => app.id === appId);
			if (app) {
				app.sendApp(req, res);
			} else {
				global.sendFile(req, res, global.path.join(__dirname, 'public', req.url));
			}
		}
	} catch (error) {
		global.sendError(req, res, 500);
	}
});

server.listen(8080, '127.0.0.1', () => {
	console.log(`Server running at http://localhost:8080/`);
});
