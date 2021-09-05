import express from 'express';
import cors from 'cors';

import * as dotenv from 'dotenv';

dotenv.config();

if (!process.env.PORT) { process.exit(1); }
let port: number = parseInt(process.env.PORT as string, 10);;


//#region MongoConectionDB
const dbconnect = require('./core/database/config/config.ts');
dbconnect();
//#endregion

const app = express();

app.use(cors());
app.use(express.json());


//#region router
import { manualImportRouter } from './routers/manualInputRouter';

app.use('/importFeed', manualImportRouter);
//#endregion


app.listen(port, () => {
    console.log(`Running on port ${port}.`);
});