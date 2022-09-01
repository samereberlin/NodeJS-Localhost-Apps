module.exports = (params) => `
		<nav class="navbar navbar-dark bg-gradient ${global.themeDark ? 'bg-dark' : 'bg-secondary'}">
			<div class="container-fluid">
				<span class="navbar-brand mb-0 h1">
					${
						params.icon[0] === '<'
							? `<div style="display: inline-block; height: 24px; width: 24px">${params.icon}</div>`
							: `<img src="${params.icon}" alt="" width="24" height="24" class="d-inline-block align-text-top">`
					}
					${params.label}
				</span>
			</div>
		</nav>
`;
