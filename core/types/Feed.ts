import { ObjectId } from "mongoose";

export type Feed = {
    _id?: ObjectId,
    title: string,
    link: string,
    originUrl: string,
    origin: string,
    dateCreated: string
};