const options = require("./getArg");
const TransformTextStream = require("./transformTextStream");
const { rule } = options;
const setMethod = rule
  .split("-")
  .map((config) => new TransformTextStream(config));

module.exports = {
  setMethod,
};
