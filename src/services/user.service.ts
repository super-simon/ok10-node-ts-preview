import { IUser } from "../controllers/user.controller";
import { User } from "../models/User.model";

class UserService {
  public async findAll(): Promise<IUser[]> {
    return User.find();
  }

  public async create(data: IUser): Promise<IUser> {
    return User.create({ ...data }) as unknown as IUser;
  }

  public async updateById(
    id: string,
    data: Partial<IUser>
  ): Promise<IUser | null> {
    return User.findOneAndUpdate(
      { _id: id },
      { ...data },
      { returnDocument: "after" }
    );
  }

  public async deleteById(id: string): Promise<IUser | null> {
    return User.findOneAndDelete({ _id: id }, { returnDocument: "after" });
  }
}

export const userService = new UserService();
