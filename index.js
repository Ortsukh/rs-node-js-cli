const fs = require("fs");
const path = require("path");
const { setMethod } = require("./setMethod");
const { pipeline } = require("stream");

const options = require("./getArg");
const { rule, input, output } = options;
const readStream = input
  ? fs.createReadStream(path.join(__dirname, input))
  : process.stdin;

const writeStream = output
  ? fs.createWriteStream(path.join(__dirname, output), {
      flags: "a",
    })
  : process.stdout;

pipeline(readStream, ...setMethod, writeStream, (err) => {
  if (err) {
    console.error("Pipeline failed.", err);
  }
});
