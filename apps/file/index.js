const manifest = require('./manifest.json');
const navbar = global.render('navbar.html', {label: manifest.name, icon: manifest.icon});
const html = global.render('html.html', {title: manifest.name, body: navbar});

module.exports = (req, res) => {
	global.sendHtml(req, res, html);
};
