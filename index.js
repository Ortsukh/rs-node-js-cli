const fs = require("fs");
const path = require("path");
const { setMethod } = require("./setMethod");
const { pipeline } = require("stream");

const getArg = require("./getArg");
const { rule, input, output } = getArg();
console.log(path.join(__dirname, input));
const readStream = input
  ? fs.createReadStream(input)
  : process.stdin;

const writeStream = output
  ? fs.createWriteStream( output, {
      flags: "a",
    })
  : process.stdout;

pipeline(readStream, ...setMethod, writeStream, (err) => {
  if (err) {
    console.error("Pipeline failed.", err);
  }
});
