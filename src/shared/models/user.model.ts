import * as mongoose from 'mongoose';
export interface User {
    _id?:{type: mongoose.Types.ObjectId}
    id?: string,
    name: string,
    username: string,
    email: string,
}