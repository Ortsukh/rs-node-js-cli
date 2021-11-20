const validationArg = require('./validationArg')
const vakidationConfig = require('./vakidationConfig')
const validationFiles = require('./validationFiles')

const arguments = process.argv.slice(2);

validationArg(arguments)
const config = vakidationConfig(arguments)
const {inputFile, outputFile} = validationFiles(arguments)

const options = {
    rule: config,
    input: inputFile,
    output: outputFile,
}

module.exports = options