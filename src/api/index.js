import express from 'express';
import todoRouter from './routes/todosRouter.js';

const api = express();

api.get('/', (req, res) => {
	res.send({
		message: 'Hello from the API',
	});
});

api.use('/todos', todoRouter);

export default api;
