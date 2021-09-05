import { Request, Response } from 'express';

import { Feed } from '../types/Feed';
import * as feedService from '../services/feedService';

import { logger } from '../../config/config_log';

export const get = async (req: Request, res: Response) => {
    try {
        let feed: Feed = await feedService.get(req.params.id);
        res.status(200).send(feed);
    } catch (e) {
        logger.error(e.message);
        res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
    }
};
export const getAll = async(req: Request, res: Response)=>{
    try {
        let feedList: Feed [] = await feedService.getAll();
        res.status(200).send(feedList);
    } catch (e) {
        logger.error(e.message);
        res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
    }
};
export const getAllDB = async(req: Request, res: Response)=>{
    try {
        let feedList: Feed [] = await feedService.getAllDB();
        res.status(200).send(feedList);
    } catch (e) {
        logger.error(e.message);
        res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
    }
};