import express from 'express';
import api from './api/index.js';

const app = express();
const { PORT = 3000 } = process.env;

app.use('/api/v1', api);

app.get('/', (req, res) => {
	res.send({
		message: 'hello world!',
	});
});

app.listen(PORT, () => {
	console.log('server started at http://localhost:' + PORT);
});

export default app;
