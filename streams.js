const fs = require("fs");

const readStream1 = fs.createReadStream("./docs/blog3.txt");

readStream1.on("data", function (chunk) {
  console.log("");
  console.log(chunk.toString());
});

const readStream2 = fs.createReadStream("./docs/blog3.txt", { encoding: "utf-8" });

readStream2.on("data", function (chunk) {
  console.log("");
  console.log(chunk);
});
)
const readStream3 = fs.createReadStream("./docs/blog3.txt", { encoding: "utf-8" });
const writeStream1 = fs.createWriteStream("./docs/blog4.txt");

readStream3.on("data", function (chunk) {
  console.log("");
  console.log(chunk);

  writeStream1.write("---------CHUNK---------\n");
  writeStream1.write(chunk);
});

const readStream4 = fs.createReadStream("./docs/blog3.txt", { encoding: "utf-8" });
const writeStream2 = fs.createWriteStream("./docs/blog4.txt");

readStream4.pipe(writeStream2);
