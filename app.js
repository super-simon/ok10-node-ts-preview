const fs = require("node:fs/promises");
const path = require("node:path");

const worker = async () => {
  const fileNames = ["file1.txt", "file2.txt", "file3.txt", "file4.txt"];
  const folderNames = ["folder1", "folder2", "folder3", "folder4"];
  try {
    // for (const folderName of folderNames) {
    //   const folderPath = path.join(process.cwd(), folderName);
    //   await fs.mkdir(folderPath, { recursive: true });
    //   for (const fileName of fileNames) {
    //     await fs.writeFile(path.join(folderPath, fileName), "Hello");
    //   }
    // }
    const promises = folderNames.map(async (folderName, i) => {
      const folderPath = path.join(process.cwd(), folderName);
      await fs.mkdir(folderPath, { recursive: true });
      await fs.writeFile(path.join(folderPath, fileNames[i]), "Hello");
    });
    Promise.all(promises);

    const files = await fs.readdir(path.join(process.cwd()));
    for (const file of files) {
      const stats = await fs.stat(path.join(process.cwd(), file));
      const isFile = stats.isFile();
      if (isFile) {
        console.log(file, " is a file");
      } else {
        console.log(file, " is a directory");
      }
    }
  } catch (e) {
    console.error(e.message);
  }
};

worker().then();
