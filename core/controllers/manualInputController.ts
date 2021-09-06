import { Request, Response } from 'express';
import { Feed } from '../types/Feed';
import * as feedService from '../services/feedService';
import { logger } from '../../config/config_log';

export const create = async (req: Request, res: Response) => {
    try {
        let feed: Feed = req.body.feed;
        let feedDB: Feed = await feedService.create(feed);

        res.status(200).send(feedDB);
    } catch (e) {
        logger.error(e.message);
        res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
    }
};
