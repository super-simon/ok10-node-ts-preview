import { NextFunction, Request, Response } from "express";

import { users } from "../db/users.db";
import { ApiError } from "../errors/api.error";

class UserMiddleware {
  public async findByIdOrThrow(
    req: Request,
    _res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;
      const user = users[+id];

      if (!user) {
        throw new ApiError("User not found.", 404);
      }

      next();
    } catch (e) {
      next(e);
    }
  }
}

export const userMiddleware = new UserMiddleware();
