const validationArg = require('./validationArg')
const vakidationConfig = require('./vakidationConfig')
const validationFiles = require('./validationFiles')

const arg = process.argv.slice(2);

validationArg(arg)
const config = vakidationConfig(arg)
const {inputFile, outputFile} = validationFiles(arg)

const options = {
    rule: config,
    input: inputFile,
    output: outputFile,
}

module.exports = options