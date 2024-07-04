
import { Controller, Route, Post, Body, Get, Path, Put, Delete } from "tsoa";
import { IUser } from "@/src/database/models/user.model";
import { UserServices } from "../services/user.service";

export interface UserCreationParams {
  name: string;
  email: string;
  age: number
}

const userServices = new UserServices();

@Route("/v1/users")
export class UserController extends Controller {
    // get a single user
  // http://localhost:3000/v1/users/60d21b8667d0d8992e610c85
  @Get("{userId}")
  public async getUserById(@Path() userId: string): Promise<IUser | null> {
    try {
      const user = await userServices.GetUserById(userId);
      return user;
    } catch (error) {
      throw error;
    }
  }

    // create user
  @Post("/")
  public async createNewUser(
    @Body() requestBody: UserCreationParams
  ): Promise<IUser> {
    try {
      const newUser = await userServices.UserCreation(requestBody);
      return newUser;
    } catch (error) {
      throw error;
    }
  }

  // get all user
  @Get("/")
  public async getAllUsers(): Promise<IUser[]> {
    try {
      const allusers = await userServices.GetAllUsers();
      return allusers;
    } catch (error) {
      throw error;
    }
  }

  // update info of a specific user
  @Put("{userId}")
  public async updateUser(
    @Path() userId: string,
    @Body() requestBody: Partial<IUser>
  ): Promise<IUser | null> {
    try {
      const updatedUser = await userServices.UpdateUser(userId, requestBody);
      return updatedUser;
    } catch (error) {
      throw error;
    }
  }

  // delete a specific user
  //(DELETE) http://localhost:3000/v1/users/6684b778b0e23c8462ce117a
  @Delete("/{userId}")
  public async deleteUser(@Path() userId: string): Promise<IUser | null> {
    try {
      const deletedUser = await userServices.DeleteUser(userId);
      return deletedUser;
    } catch (error) {
      throw error;
    }
  }
}

