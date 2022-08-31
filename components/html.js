module.exports = (params) => `
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width,initial-scale=1.0">
		<title>${params.title}</title>
		<link href="/css/bootstrap.min.css" rel="stylesheet">
		<link href="/css/global.css" rel="stylesheet">
	</head>
	<body>
		${params.body}
		<script src="/js/bootstrap.bundle.min.js"></script>
	</body>
</html>
`;
