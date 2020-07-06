import express from 'express';
import { getTodos } from './../controllers/todosController.js';
const todoRouter = express.Router();

todoRouter.get('/', getTodos);

export default todoRouter;
