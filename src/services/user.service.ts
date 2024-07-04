import { IUser } from "@/src/database/models/user.model";
import { UserRepository } from "@/src/database/repositories/user.repositoies";

const userRepository = new UserRepository();

export class UserServices {
  // get a single user
  public async GetUserById(userId: string): Promise<IUser | null> {
    try {
      const user = await userRepository.GetUserById(userId);
      return user;
    } catch (error) {
      throw error;
    }
  }
  // create user
  public async UserCreation(requestBody: IUser): Promise<IUser> {
    try {
      const user = await userRepository.UserCreation(requestBody);
      return user;
    } catch (error) {
      throw error;
    }
  }

  // get all user
  public async GetAllUsers(): Promise<IUser[]> {
    try {
      const allUsers = await userRepository.GetAllUsers();
      return allUsers;
    } catch (error) {
      throw error;
    }
  }

  // update info of 
  public async UpdateUser(userId: string, requestBody: Partial<IUser>): Promise<IUser | null> {
    try {
      const updatedUser = await userRepository.UpdateUser(userId, requestBody);
      return updatedUser;
    } catch (error) {
      throw error;
    }
  }

  // delete a specific user
  //(DELETE) http://localhost:3000/v1/users/6684b778b0e23c8462ce117a
  public async DeleteUser(userId: string): Promise<IUser | null> {
    try {
      const deletedUser = await userRepository.DeleteUser(userId);
      return deletedUser;
    } catch (error) {
      throw error;
    }
  }
}
