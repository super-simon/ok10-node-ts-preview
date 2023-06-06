import { NextFunction, Request, Response } from "express";

import { userService } from "../services/user.service";

export interface IUser {
  name: string;
  email: string;
  password: string;
  age: number;
  gender: string;
}

class UserController {
  public async findAll(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<IUser[]> | void> {
    try {
      const users = await userService.findAll();
      return res.status(200).json(users);
    } catch (e) {
      next(e);
    }
  }

  public async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<IUser[]> | void> {
    try {
      const user = await userService.create(req.body);
      res.status(201).json(user);
    } catch (e) {
      next(e);
    }
  }

  public updateById(req: Request, res: Response) {
    const { id } = req.params;
    const updatedHubkaBobInfo = req.body;

    users[+id - 1] = updatedHubkaBobInfo;

    res
      .status(200)
      .json({ message: "Hubka Bob updatet", data: updatedHubkaBobInfo });
  }

  public deleteById(req: Request, res: Response) {
    const { id } = req.params;
    users.splice(+id - 1, 1);

    res.status(200).json({ message: "Hubka Bob deleted" });
  }
}

export const userController = new UserController();
