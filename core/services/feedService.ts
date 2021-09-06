import * as utils from '../utils/utils';
import * as validations from '../utils/validations';

import { Feed } from '../types/Feed';

import * as feedRepository from '../respositories/feedRespository';
import * as dataScrapingPAISService from './dataScrapingPAISService';
import * as dataScrapingMUNDOService from './dataScrapingMUNDOService';

export const create = async (newFeed: Feed): Promise<Feed> => {
    let feed: Feed = newFeed;

    feed.dateCreated = utils.dateNowSQL();
    feed.origin = 'manually added';

    await feedRepository.create(feed);
    return feed;
};
export const get = async (id: string): Promise<Feed> => {
    validations.isValidMongoId(id);
    let feed: Feed = await feedRepository.get(id);
    return feed;
};
export const getAll = async (): Promise<Feed[]> => {
    let feedList: Feed[] = await dataScrapingPAISService.scrapeData();
    feedList = feedList.concat(await dataScrapingMUNDOService.scrapeData());

    let feedListDB : Feed[] = [];
    for( let feedDB of await feedRepository.getAll()){
        if(feedDB.dateCreated.includes(utils.simpleDateNowSQL())){
            feedListDB.push(feedDB);
        }
    }
    feedList = feedList.concat(feedListDB);
    return feedList;
};
export const getAllDB = async (): Promise<Feed[]> => {
    let feedList: Feed[] = await feedRepository.getAll();
    return feedList;
};