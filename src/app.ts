import express, { NextFunction, Request, Response } from "express";

import { ApiError } from "./errors/api.error";
import { userRouter } from "./routers/user.router";

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use("/users", userRouter);

app.use((err: ApiError, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || 500;

  return res.status(status).json({
    message: err.message,
    status,
  });
});

const PORT = 5100;

// import * as mongoose from "mongoose";
app.listen(PORT, () => {
  // mongoose.connect("mongodb://127.0.0.1:27017/preview");
  console.log(`Server is started on ${PORT}`);
});
