import { Request, Response } from 'express';

import { Feed } from '../types/Feed';
import * as feedService from '../services/feedService';

export const get = async (req: Request, res: Response) => {
    try {
        let feed: Feed = await feedService.get(req.params.id);
        res.status(200).send(feed);
    } catch (e) {
        res.status(500).send(e.message);
    }
};