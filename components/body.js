module.exports = (params) => `
	<p>${params.label}</p>
	<ul>${params.apps.map((app) => `<li><a href="/${app.id}/">${app.name}</a></li>`).join('')}</ul>
`;
