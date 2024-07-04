import { IUser, UserModel } from "@/src/database/models/user.model";

export class UserRepository {
  // get a single user
  public async GetUserById(userId: string): Promise<IUser | null> {
    try {
      const user = await UserModel.findById(userId);
      return user;
    } catch (error) {
      throw error;
    }
  }

  // create a new user
  public async UserCreation(requestBody: IUser): Promise<IUser> {
    try {
      const newUser = await UserModel.create(requestBody);
      return newUser;
    } catch (error) {
      throw error;
    }
  }

  // get all users
  public async GetAllUsers(): Promise<IUser[]> {
    try {
      const allUsers = await UserModel.find();
      return allUsers;
    } catch (error) {
      throw error;
    }
  }

  // update info of a specific user
  public async UpdateUser(userId: string, requestBody: Partial<IUser>): Promise<IUser | null> {
    try {
      const updatedUser = await UserModel.findByIdAndUpdate(userId, requestBody, {new: true});
      return updatedUser;
    } catch (error) {
      throw error;
    }
  }

  // delete a specific user
  //(DELETE) http://localhost:3000/v1/users/6684b778b0e23c8462ce117a
  public async DeleteUser(userId: string): Promise<IUser | null> {
    try {
      const deletedUser = await UserModel.findByIdAndDelete(userId);
      return deletedUser;
    }  catch (error) {
      throw error;
    }
  }
}
