import { connect } from 'mongoose';

const dbconnect = () => {
    const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_NAMEDB}?retryWrites=true&w=majority`;

    connect(uri)
        .then(() => { console.log('Mongo Connection established.'); })
        .catch(error => { throw Error('Error connecting MongoDB: ' + error); })
};

module.exports = dbconnect; 