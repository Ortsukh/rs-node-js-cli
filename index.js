const fs = require("fs");
const { setMethod } = require("./setMethod");
const { pipeline } = require("stream");

const getArg = require("./getArg");
const { rule, input, output } = getArg();
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
