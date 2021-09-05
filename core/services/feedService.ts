import * as feedRepository from '../respositories/feedRespository';
import * as utils from '../utils/utils';
import { Feed } from '../types/Feed';

export const create = async (newFeed: Feed): Promise<Feed> => {
    let feed: Feed = newFeed;

    feed.dateCreated = utils.dateNowSQL();
    feed.origin = 'manually added';

    await feedRepository.create(feed);
    return feed;
};
export const getAll = async (): Promise<Feed[]> => {
    let feedList: Feed[] = [];

    feedList = feedList.concat(await feedRepository.getAll());
    return feedList;
};
export const getAllDB = async (): Promise<Feed[]> => {
    let feedList: Feed[] = await feedRepository.getAll();
    return feedList;
};