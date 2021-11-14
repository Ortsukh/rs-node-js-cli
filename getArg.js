const fs = require("fs");
const CustomError = require('./customError')
const arguments = process.argv.slice(2);


let counterI = 0;
let counterO = 0;
let counterC = 0;

arguments.forEach((el) => {
    if (el == '-c') counterC++;
    if (el == '-i') counterI++;
    if (el == '-o') counterO++;
})

if (counterC != 1) {
    throw new CustomError('Error: wrong arguments')
}
if (counterI > 1) {
    throw new CustomError('Error: wrong arguments')
}
if (counterO > 1) {
    throw new CustomError('Error: wrong arguments')
}

const config = arguments[arguments.indexOf("-c") + 1]
const inputFile = arguments.indexOf("-i") !== -1 ? arguments[arguments.indexOf("-i") + 1] : undefined;
const outputFile = arguments.indexOf("-o") !== -1 ? arguments[arguments.indexOf("-o") + 1] : undefined;

const hasInputFile = fs.existsSync(inputFile)
const hasOutputFile = fs.existsSync(outputFile)

if (!hasInputFile && counterI != 0) {
    throw new CustomError(`can't find the input file`)
}
if (!hasOutputFile && counterO != 0) {
    throw new CustomError(`can't find the output file`)
}

const configArr = config.split("-");
configArr.forEach((el) => {
    if (el !== "C0" && el !== "C1" && el !== "A" && el !== "R0" && el !== "R1") {
        throw new CustomError('wrong config')
    }
})
const options = {
    rule: config,
    input: inputFile,
    output: outputFile,
}

module.exports = options