const fs = require("fs");

// reading a file text
const readText = fs.readFileSync(__dirname + "/texts/read.txt", "utf-8");

// writing a file
const writeText = fs.writeFileSync(__dirname + "/texts/write.txt", readText);

console.log(readText);
