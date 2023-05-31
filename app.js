//EVENTS

const event = require("node:events");

const eventEmitter = new event();

eventEmitter.on("click", ({ name }) => {
  console.log("Click-click", name);
});

eventEmitter.once("clickAndDie", () => {
  console.log("This is my first and last attempt..");
});

eventEmitter.emit("click", { name: "Oleksandr" });

console.log(eventEmitter.eventNames());

eventEmitter.emit("clickAndDie");
eventEmitter.emit("clickAndDie");
eventEmitter.emit("clickAndDie");
eventEmitter.emit("clickAndDie");

console.log(eventEmitter.eventNames());

const fs = require("fs");
const path = require("path");

const readStream = fs.createReadStream(
  path.join("test", "myrnyy-panas-khiba-revut-voly-iak-iasla-povni.html"),
  {
    encoding: "utf-8",
  }
);

const writeStream = fs.createWriteStream(path.join("test", "text2.html"));

// readStream.on("data", (chunk) => {
//   writeStream.write(chunk);
//   console.log(chunk);
// });

const handleError = () => {
  console.log("ERROR!!!");
  readStream.destroy();
  writeStream.end("ERROR WHILE READING FILE");
};

readStream
  .on("error", handleError)
  .pipe(writeStream)
  .on("close", () => {
    writeStream.end();
    fs.rm(path.join("test", "text2.html"), (err) => {
      if (err) {
        throw new Error(err.message);
      }
    });
  });

//EXPRESS

const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = [
  {
    name: "Oleksandr",
    age: 38,
    gender: "male",
  },
  {
    name: "Olia",
    age: 36,
    gender: "female",
  },
  {
    name: "Tetiana",
    age: 36,
    gender: "female",
  },
  {
    name: "Rostyk",
    age: 38,
    gender: "male",
  },
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:userId", (req, res) => {
  const { userId } = req.params;
  const user = users[+userId - 1];
  res.json(user);
});

app.post("/users", (req, res) => {
  const body = req.body;

  users.push(body);
  res.status(201).json({
    message: "User created.",
  });

  console.log(body);
});

app.put("/users/:userId", (req, res) => {
  const { userId } = req.params;
  const updateUser = req.body;
  users[+userId - 1] = updateUser;
  res.status(200).json({
    message: "User updated.",
    data: users[+userId - 1],
  });
});

app.delete("/users/:userId", (req, res) => {
  const { userId } = req.params;
  users.splice(+userId - 1, 1);
  res.status(200).json({
    message: "User deleted",
  });
});

app.get("/wellcome", (req, res) => {
  console.log("wellcome");
  res.json("WELLCOME!!!");
  // res.end();
});

const PORT = 5100;

app.listen(5100, () => {
  console.log(`Server has started on PORT ${PORT}`);
});
