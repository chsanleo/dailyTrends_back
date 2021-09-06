import axios from 'axios';
import Cheerio from 'cheerio';

import * as utils from '../utils/utils';

import { Feed } from '../types/Feed';
import { logger } from '../../config/config_log';

const url = "https://elpais.com";

export const scrapeData = async (): Promise<Feed[]> => {
    try {

        const { data } = await axios.get(url);

        let feedList: Feed[] = [];
        let $ = Cheerio.load(data);
        let listItems = $(".headline");

        listItems.each((idx, el) => {
            let link: string = ($(el).children("a").attr("href"));

            if (link.includes(utils.simpleDateNowSQL())) {
                let feed: Feed = {
                    title: $(el).children("a").text(),
                    dateCreated: utils.dateNowSQL(),
                    link: url + link,
                    originUrl: url,
                    origin: 'auto'
                }
                feedList.push(feed);
            }
        });
        return feedList;
    } catch (err) {
        logger.error(err);
    }
};