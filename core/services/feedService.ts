import * as feedRepository from '../respositories/feedRespository';
import * as utils from '../utils/utils';
import { Feed } from '../types/Feed';

export const create = async (newFeed: Feed): Promise<Feed> => {
    let feed: Feed = newFeed;

    feed.dateCreated = utils.dateNowSQL();
    feed.origin = 'manually added';

    feedRepository.create(feed);
    return feed;
};