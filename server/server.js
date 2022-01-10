const express = require('express');
const next = require('next');
require('dotenv').config();

const port = process.env.PORT || 7108;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();

(async () => {
	try {
		await app.prepare();
		server.all('*', (req, res) => {
			return handle(req, res);
		});

		server.listen(port, () => console.log('PORT ', port));
	} catch (e) {
		console.log(e);
	}
})();
