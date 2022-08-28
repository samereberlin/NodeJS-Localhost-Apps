module.exports = (params) => `
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width,initial-scale=1.0">
		<title>${params.title}</title>
	</head>
	<body>${params.body}</body>
</html>
`;
