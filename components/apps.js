module.exports = (dirnameApps) =>
	global.fs
		.readdirSync(dirnameApps, {withFileTypes: true})
		.filter((app) => app.isDirectory())
		.map((app) => ({
			...require(`${dirnameApps}${app.name}/manifest.json`),
			id: app.name,
			sendApp: require(`${dirnameApps}${app.name}/index.js`),
		}));
