const validationArg = require('./validationArg')
const validationConfig = require('./validationConfig')
const validationFiles = require('./validationFiles')

const newArg = process.argv.slice(2);
const getArg= (arg = newArg)=>{
validationArg(arg)
const config = validationConfig(arg)
const {inputFile, outputFile} = validationFiles(arg)

const options = {
    rule: config,
    input: inputFile,
    output: outputFile,
}
return options
}
module.exports = getArg