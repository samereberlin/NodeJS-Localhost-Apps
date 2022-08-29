module.exports = (params) => `
	<p>${params.label}</p>
	<ul>
		${params.items.map((item) => `<li><a href="/${item}/">${item}</a></li>`).join('')}
	</ul>
`;
