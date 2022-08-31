module.exports = (dirnameApps) =>
	global.fs
		.readdirSync(dirnameApps, {withFileTypes: true})
		.filter(
			(app) =>
				app.isDirectory() &&
				global.fs.existsSync(global.path.join(dirnameApps, app.name, 'manifest.json')) &&
				global.fs.existsSync(global.path.join(dirnameApps, app.name, 'index.js')),
		)
		.map((app) => ({
			...require(`${dirnameApps}/${app.name}/manifest.json`),
			id: app.name,
			sendApp: require(`${dirnameApps}/${app.name}/index.js`),
		}));
