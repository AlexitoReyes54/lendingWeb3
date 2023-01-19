import { Schema, model } from 'mongoose';
import { User } from '../interfaces/User';

const userSchema = new Schema<User>({
    id: { type: Number, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
});


const UserModel = model<User>('User', userSchema);

export {userSchema, UserModel};