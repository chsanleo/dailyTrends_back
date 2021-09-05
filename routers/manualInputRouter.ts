import express from 'express';
export const manualImportRouter = express.Router();

import * as manualImporController from '../core/controllers/manualInputController';

manualImportRouter.post('/create', manualImporController.create);
