const path = require("node:path");

console.log(path.sep);

const filePath = path.join("./content", "subfolder", "text.txt");
console.log(filePath);

const base = path.basename("./archivo.txt");
console.log(base);

const filename = path.basename("./archivo.txt", ".txt");
console.log(filename);

const extension = path.extname("image.jpg");
console.log(extension);
