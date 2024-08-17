const { readFile, writeFile } = require("fs");
readFile("./content/write.txt", "utf8", (err, result) => {
  if (err) {
    console.log("lund lele");
    return;
  }
  readFile("./content/subfolder/test.txt", "utf8", (err, result) => {
    if (err) {
      console.log("lund lele");
      return;
    }
    console.log(result);
  });
  console.log(result);
});
console.log("dsghjk");
