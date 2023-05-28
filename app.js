// -- MODULES --
const { sayHello } = require("./helper");
const { logToConsole } = require("./test/test");

sayHello();

// -- GLOBAL VARIABLES --
console.log("FROM app.js");
console.log(__dirname);
console.log(__filename);
console.log(process.cwd());

logToConsole();

// console.log(process);

// -- PATH --
const path = require("path");

const joinedPath = path.join(__dirname, "test", "test.js");
const normalizedPath = path.normalize("///\\test\\//test.js");
const resolvedPath = path.resolve("test", "test.js");

console.log("joinedPaht: ", joinedPath);
console.log("normalizedPaht: ", normalizedPath);
console.log("resolvedPaht: ", resolvedPath);

// -- OS --
const os = require("os");
console.log("arch: ", os.arch());
console.log("cpus: ", os.cpus());

// -- FS --
const fs = require("fs");

fs.writeFile(path.join("test", "text2.txt"), "Hello from Okten!", (err) => {
  if (err) {
    throw new Error(err.message);
  }
});

fs.readFile(
  path.join(__dirname, "test", "text.txt"),
  { encoding: "utf8" },
  (err, data) => {
    if (err) {
      throw new Error(err.message);
    }
    console.log(data.toString());
  }
);

fs.appendFile(
  path.join("test", "text2.txt"),
  "\nHello From Super Oleksandr!",
  (err) => {
    if (err) {
      throw new Error(err.message);
    }
  }
);

fs.truncate(path.join("test", "text2.txt"), (err) => {
  if (err) {
    throw new Error(err.message);
  }
});

fs.unlink(path.join("test", "text2.txt"), (err) => {
  if (err) {
    throw new Error(err.message);
  }
});

fs.readdir(path.join("test"), (err, data) => {
  if (err) {
    throw new Error(err.message);
  }
  console.log("dir: ", data);
});

fs.stat(path.join("test"), (err, stats) => {
  if (err) {
    throw new Error(err.message);
  }
  console.log("stats: ", stats);
  console.log("Is Directory: ", stats.isDirectory());
  console.log("Is File: ", stats.isFile());
});

fs.readdir(path.join("test"), { withFileTypes: true }, (err, data) => {
  if (err) {
    throw new Error(err.message);
  }
  data.forEach((file) => {
    console.log(file.name, "is file: ", file.isFile());
  });
});

fs.mkdir(path.join("test", "test2"), (err) => {
  if (err) {
    throw new Error(err.message);
  }
  fs.rmdir(path.join("test", "test2"), (err) => {
    if (err) {
      throw new Error(err.message);
    }
  });
});
