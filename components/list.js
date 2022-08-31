module.exports = (params) => `
	<p>${params.label}</p>
	<ul>
		${Object.keys(params.items)
			.map((item) => `<li><a href="/${params.items[item].id}/">${params.items[item].name}</a></li>`)
			.join('')}
	</ul>
`;
