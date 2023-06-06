function sayHello() {
  console.log("hello from helper");
  console.log("__dirname from helper: ", __dirname);
  console.log("__filename from helper: ", __filename);
  console.log("process.cwd() from helper: ", process.cwd());
}

module.exports = {
  sayHello,
};
