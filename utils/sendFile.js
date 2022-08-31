const map = {
	'.ico': 'image/x-icon',
	'.html': 'text/html',
	'.js': 'text/javascript',
	'.json': 'application/json',
	'.css': 'text/css',
	'.png': 'image/png',
	'.jpg': 'image/jpeg',
	'.wav': 'audio/wav',
	'.mp3': 'audio/mpeg',
	'.svg': 'image/svg+xml',
	'.pdf': 'application/pdf',
	'.doc': 'application/msword',
};

module.exports = (req, res, file) => {
	if (global.fs.existsSync(file)) {
		if (fs.statSync(file).isDirectory()) {
			file += `${file.slice(-1) === '/' ? '' : '/'}index.html`;
			if (!global.fs.existsSync(file)) {
				global.sendError(req, res, 404);
			}
		}
		const ext = global.path.parse(file).ext;
		global.fs.readFile(file, (error, data) => {
			if (error) {
				global.sendError(req, res, 500);
			} else {
				res.setHeader('Content-type', map[ext] || 'text/plain');
				res.end(data);
			}
		});
	} else {
		global.sendError(req, res, 404);
	}
};
