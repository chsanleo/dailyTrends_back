import axios from 'axios';
import Cheerio from 'cheerio';

import * as utils from '../utils/utils';

import { Feed } from '../types/Feed';
import { logger } from '../../config/config_log';

const url = "https://www.elmundo.es";

export const scrapeData = async (): Promise<Feed[]> => {
    try {
        let feedList: Feed[] = [];
        return feedList;
    } catch (err) {
        logger.error(err);
    }
};