export const isValidMongoId= (_id) => {
    let ObjectID = require("mongodb").ObjectID;
    if (!ObjectID.isValid(_id)) { throw Error('The id:' + _id + ' is not valid.'); }
};