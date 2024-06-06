const fs = require("node:fs");
const path = require("node:path");
const pc = require("picocolors");

const folder = process.argv[2] ?? ".";

async function ls(folder) {
  let files;
  try {
    files = await fs.readdir(folder);
  } catch {
    console.error(pc.red(`No se pudo leer el directorio ${folder}`));
    process.exit(1);
  }

  const filesPromieses = files.map(async (file) => {
    const filePath = path.join(folder, file);
    let stats;
    try {
      stats = await fs.stat(filePath);
    } catch {
      console.error(`No se pudo leer el archivo ${filePath}`);
      process.exit(1);
    }
    const isDirectory = stats.isDirectory();
    const fileType = isDirectory ? "d" : "f";
    const fileSize = stats.size.toString();
    const fileModified = stats.mtime.toLocaleString();

    return `${fileType} ${pc.blue(file.padEnd(20))} ${pc
      .green(fileSize)
      .padStart(10)} ${pc.yellow(fileModified)}`;
  });

  const filesInfo = await Promise.all(filesPromieses);

  filesInfo.forEach((fileInfo) => console.log(fileInfo));
}

ls(folder);
