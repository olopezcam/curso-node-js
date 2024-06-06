const fs = require("node:fs");

console.log("Leyendo primer archivo...");
fs.readFile("./archivo.txt", "utf-8", (err, text) => {
  console.log("Primer texto: ", text);
});

console.log("Leyendo segundo archivo...");
fs.readFile("./archivo2.txt", "utf-8", (err, text) => {
  console.log("Segundo texto: ", text);
});