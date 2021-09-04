import express from 'express';
import config from './config/config.js';

const app = express();
const port = process.env.PORT || config.PORT;

app.listen(port, () => {
    console.log(`Running on port ${port}.`);
});