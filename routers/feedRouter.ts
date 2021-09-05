import express from 'express';
export const feedRouter = express.Router();

import * as feedController from '../core/controllers/feedController';

feedRouter.get('/:id', feedController.get);
feedRouter.get('/', feedController.getAll);
feedRouter.get('/db', feedController.getAllDB);