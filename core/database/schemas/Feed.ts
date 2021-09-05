import { Schema, model } from 'mongoose';
import { Feed } from '../../types/Feed';

const schema = new Schema<Feed>({
    title: { type: String, required: true },
    link: { type: String, required: true },
    originUrl: { type: String, required: true },
    origin: { type: String, required: true },
    dateCreated: { type: String, required: true },
});

export const FeedModel = model<Feed>('Feed', schema);