import { IUser } from "../controllers/user.controller";
import { User } from "../models/User.model";

class UserService {
  public async findAll(): Promise<IUser[]> {
    return User.find();
  }

  public async create(data: IUser) {
    return User.create({ ...data });
  }
}

export const userService = new UserService();
