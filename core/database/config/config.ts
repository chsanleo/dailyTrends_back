import { env } from 'process';
import { connect } from 'mongoose';

const config = require('../../../config/config.js');

const dbconnect = () => {

    if(!config){

    }
    let user: string = env.MONGO_USER || config.MONGO_USER;
    let pass: string =  env.MONGO_PASS || config.MONGO_PASS;
    let cluster: string = env.MONGO_CLUSTER || config.MONGO_CLUSTER;
    let nameDB: string = env.MONGO_NAMEDB || config.MONGO_NAMEDB;

    const uri = `mongodb+srv://${user}:${pass}@${cluster}/${nameDB}?retryWrites=true&w=majority`;

    connect(uri)
        .then(() => { console.log('Mongo Connection established.'); })
        .catch(error => { throw Error('Error connecting MongoDB:' + error); })
};

module.exports = dbconnect;