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

  public async updateById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<IUser> | void> {
    try {
      const updatedUser = await userService.updateById(req.params.id, req.body);
      res.status(200).json(updatedUser);
    } catch (e) {
      next(e);
    }
  }

  public async deleteById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<IUser> | void> {
    try {
      const deletedUser = await userService.deleteById(req.params.id);
      res.status(200).json(deletedUser);
    } catch (e) {
      next(e);
    }
  }
}

export const userController = new UserController();
