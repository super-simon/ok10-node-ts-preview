import { NextFunction, Request, Response } from "express";

import { ApiError } from "../errors/api.error";
import { User } from "../models/User.model";

class UserMiddleware {
  public async findByIdOrThrow(
    req: Request,
    _res: Response,
    next: NextFunction
  ) {
    try {
      const user = await User.findById(req.params.id);
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
