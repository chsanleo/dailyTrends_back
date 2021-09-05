import express from 'express';
import config from './config/config.js';

const app = express();
const port = process.env.PORT || config.PORT;

//#region MongoConectionDB
const dbconnect = require('./core/database/config/config.ts');
dbconnect();
//#endregion

const app = express();
//#region router
import { manualImportRouter } from './routers/manualInputRouter';

app.use('/importFeed', manualImportRouter);
//#endregion
app.listen(port, () => {
    console.log(`Running on port ${port}.`);
});