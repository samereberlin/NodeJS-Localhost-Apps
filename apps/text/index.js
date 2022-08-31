const manifest = require('./manifest.json');
const header = require(`${global.dirname}/components/header`)({label: manifest.name, icon: manifest.icon});
const html = require(`${global.dirname}/components/html`)({title: manifest.name, body: header});

module.exports = (req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	res.end(html);
};
