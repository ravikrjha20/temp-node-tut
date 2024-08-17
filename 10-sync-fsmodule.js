const { log } = require("console");
const { readFileSync, writeFileSync } = require("fs");
const first = readFileSync("./content/subfolder/test.txt", "utf8");
// const second=readFileSync('./content/second.txt','utf8')
console.log(first);
writeFileSync("./content/write.txt", "blah blah", { flag: "a" });
const sec = readFileSync("./content/write.txt", "utf8");
console.log(sec);
