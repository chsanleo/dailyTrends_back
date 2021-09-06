import axios from 'axios';
import Cheerio from 'cheerio';

import * as utils from '../utils/utils';

import { Feed } from '../types/Feed';
import { logger } from '../../config/config_log';

const url = "https://www.elmundo.es";

export const scrapeData = async (): Promise<Feed[]> => {
    try {

        const { data } = await axios.get(url);

        let feedList: Feed[] = [];
        let $ = Cheerio.load(data);
        let listItems = $(".ue-c-cover-content__link");

        listItems.each((idx, el) => {
            
            let link: string = ($(el).attr("href"));

            let fullDate: string = utils.dateNowSQL();
            let today: string = fullDate.substring(0, 10).replace(/-/g,'/');

            if (link.includes(today)) {
                let feed: Feed = {
                    title: $(el).text(),
                    dateCreated: fullDate,
                    link: link,
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