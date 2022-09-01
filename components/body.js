const header = require(`${global.dirname}/components/header`);

module.exports = (params) => `
		${header({label: params.label, icon: '/favicon.ico'})}
		<div class="list-group rounded-0">
			${params.apps
				.map(
					(app) => `
			<a href="/${app.id}/" class="list-group-item list-group-item-action ${global.themeDark ? 'text-bg-dark' : ''}">
				<div style="display: inline-block; height: 20px; width: 20px">${app.icon}</div>
				${app.name}
			</a>
			`,
				)
				.join('')}
		</div>
`;
