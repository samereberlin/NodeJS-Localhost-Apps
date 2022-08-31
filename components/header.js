module.exports = (params) => `
		<nav class="navbar navbar-dark bg-secondary bg-gradient">
			<div class="container-fluid">
				<span class="navbar-brand mb-0 h1">
					<img src="${params.icon}" alt="" width="24" height="24" class="d-inline-block align-text-top">
					${params.label}
				</span>
			</div>
		</nav>
`;
