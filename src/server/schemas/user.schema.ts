import mongoose from 'mongoose';
import type { User } from '../../shared/models/user.model';
const {Schema, model} = mongoose

const userSchema = new Schema<User>({
    id: {type: String, required: true},
    name: {type: String, required: true},
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true},
})

userSchema.pre('save', function(next) {
   
    this.id = `${this.email ? this.email : ''}`;
    next();
}); 

export const UserModel = model<User>('User',userSchema)
