import { Schema, model } from 'mongoose';

interface User {
  username: string;
  password: string;
  age: number;
}

const schema = new Schema<User>({
  username: { type: String, required: true },
  password: { type: String, required: true },
  age: Number,
});

const UserModel = model<User>('User', schema);

export default UserModel;
