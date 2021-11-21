const getArg = require("./getArg");
const TransformTextStream = require("./transformTextStream");
const { rule } = getArg();
const setMethod = rule
  .split("-")
  .map((config) => new TransformTextStream(config));

module.exports = {
  setMethod,
};
