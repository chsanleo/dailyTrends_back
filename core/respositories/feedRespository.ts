import { FeedModel } from '../database/schemas/Feed';
import { Feed } from '../types/Feed';

export const create = async (newFeed: Feed): Promise<Feed> => {
    let feed = await FeedModel.create(newFeed);
    return feed;
};
export const get = async (id: string): Promise<Feed> => {
    let feed = await FeedModel.findById(id);
    return feed;
};