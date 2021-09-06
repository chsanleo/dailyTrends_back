import axios from 'axios';
import Cheerio from 'cheerio';

import * as utils from '../utils/utils';

import { Feed } from '../types/Feed';
import { logger } from '../../config/config_log';

const url = "https://elpais.com";

export const scrapeData = async (): Promise<Feed[]> => {
    try {
    } catch (err) {
        logger.error(err);
    }
};