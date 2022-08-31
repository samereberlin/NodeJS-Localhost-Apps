module.exports = (prefix) =>
	global.fs
		.readdirSync(`${global.dirname}${prefix}`, {withFileTypes: true})
		.filter((app) => app.isDirectory())
		.map((app) => app.name)
		.reduce(
			(acc, app) => ({
				...acc,
				[app]: {
					...require(`${global.dirname}${prefix}${app}/manifest.json`),
					id: app,
					sendApp: require(`${global.dirname}${prefix}${app}/index.js`),
				},
			}),
			{},
		);
