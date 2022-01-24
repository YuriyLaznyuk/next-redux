const express = require('express');
const next = require('next');
require('dotenv').config();
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 7108;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();
const pdfEng = path.resolve('file', 'YuriyL_12.pdf');
const pdfUkr = path.resolve('file', 'YuriyL_12_eng.pdf');
const corsMiddleware = require('./middleware/cors.middleware');

(async () => {
	try {
		await app.prepare();
		// server.use(corsMiddleware);
		server.get('*', (req, res) => {
			return handle(req, res);
		});
		server.post('/api/user', (req, res) => {
			if (fs.existsSync(pdfEng)) {
				return res.download(pdfUkr, 'YuriyL_12.pdf');
			} else return res.status(500).json({ error: 'DownloadError' });
		});
		server.use('/api/test', (req, res) => {
			res.json({ message: 'Hello' });
		});

		server.listen(port, () => {
			console.log('PORT ', port);
			console.log(pdfEng);
			// console.log(pdfUkr);
		});
	} catch (e) {
		console.log(e);
	}
})();
