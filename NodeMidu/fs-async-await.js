const { readFile } = require("node:fs/promises");
//IIFE
(async () => {
  console.log("Leyendo primer archivo...");
  const text = await readFile("./archivo.txt", "utf-8");
  console.log("Primer texto: ", text);

  console.log("Cosas mientras se lee el archivo1...");

  console.log("Leyendo segundo archivo...");
  const secondText = await readFile("./archivo2.txt", "utf-8");
  console.log("Segundo texto: ", secondText);
})();
