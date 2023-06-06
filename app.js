//MODULES
const helperJS = require("./test/helpers");

helperJS.sayHello();

//GLOBALS
console.log("__dirname: ", __dirname);
console.log("__filename: ", __filename);
console.log("process.cwd(): ", process.cwd());

//PATH
const path = require("node:path");
const joinedPath = path.join("test", "helper.js");
console.log("jnoinedPath: ", joinedPath);

const normalizedPath = path.normalize("////adf///asfsdafsa//////asfasf");
console.log("normalizedPath: ", normalizedPath);

//OS
const os = require("os");
console.log("os.arch(): ", os.arch());
console.log("oscpus(): ", os.cpus());

//FS
const fs = require("fs");

fs.readFile(
  path.join(__dirname, "test", "text.txt"),
  { encoding: "utf-8" },
  (err, data) => {
    if (err) {
      throw new Error(err.message);
    }

    console.log(data);
  }
);

fs.writeFile(path.join(__dirname, "test", "text2.txt"), "Hello yoy!", (err) => {
  if (err) {
    throw new Error(err.message);
  }
});
