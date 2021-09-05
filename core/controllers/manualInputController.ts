import { Request, Response } from 'express';
import { Feed } from '../types/Feed';
import * as feedService from '../services/feedService';

export const create = async (req: Request, res: Response) => {
    try {
        let feed: Feed = req.body.feed;
        let feedDB: Feed = await feedService.create(feed);

        res.status(200).send(feedDB);
    } catch (e) {
        res.status(500).send(e.message);
    }
};
