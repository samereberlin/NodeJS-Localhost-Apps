module.exports = () =>
	global.fs
		.readdirSync(__dirname, {withFileTypes: true})
		.filter((app) => app.isDirectory())
		.map((app) => ({
			...require(`${__dirname}/${app.name}/manifest.json`),
			id: app.name,
			sendApp: require(`${__dirname}/${app.name}/index.js`),
		}));
