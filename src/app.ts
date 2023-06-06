import express from "express";
import * as mongoose from "mongoose";

import { userRouter } from "./routers/user.router";

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use("/users", userRouter);

const PORT = 5100;
app.listen(PORT, () => {
  mongoose.connect("mongodb://127.0.0.1:27017/preview");
  console.log(`Server is started on ${PORT}`);
});
