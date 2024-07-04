
import { Schema, model } from "mongoose";
// import { number } from "yup";

export interface IUser {
  name: string;
  email: string;
  age: number;
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true}
});

export const UserModel = model<IUser>("User", UserSchema);
