module.exports = (template, d) => {
	return eval('`' + fs.readFileSync(template, 'utf8') + '`');
};
