const { cipher } = require("./cipher.js");
const { Transform } = require("stream");
class TransformTextStream extends Transform {
  constructor(opt) {
    super();
    this.method = opt[0];
    this.action = opt[1];
  }

  _transform(chunk, encoding, callback) {
    chunk = chunk.toString("utf8");
    try {
      const resultString = cipher(chunk, this.method, this.action);
      callback(null, resultString);
    } catch (err) {
      callback(err);
    }
  }
}

module.exports = TransformTextStream;
