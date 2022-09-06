module.exports = (template, d) => {
	return eval('`' + fs.readFileSync(global.path.join(__dirname, template), 'utf8') + '`');
};
