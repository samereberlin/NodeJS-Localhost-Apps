const manifest = require('./manifest.json');
const header = global.interpolate(global.path.join(global.dirname, 'components', 'header.html'), {
	label: manifest.name,
	icon: manifest.icon,
});
const html = global.interpolate(global.path.join(global.dirname, 'components', 'html.html'), {
	title: manifest.name,
	body: header,
});

module.exports = (req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	res.end(html);
};
