import { Request, Response } from "express";

import { users } from "../db/users.db";

interface IUser {
  name: string;
  age: number;
  gender: string;
}

class UserController {
  public async findAll(
    _req: Request,
    res: Response
  ): Promise<Response<IUser[]>> {
    try {
      throw new Error("Something weng wrong");
      // return res.json(users);
    } catch (e) {
      return res.json({
        message: e instanceof Error ? e.message : "Unknown error.",
        status: 400,
      });
    }
  }

  public create(req: Request, res: Response) {
    users.push(req.body);

    res.status(201).json({ message: "Hubka Bob created." });
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
