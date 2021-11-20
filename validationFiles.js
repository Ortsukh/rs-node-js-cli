
const fs = require("fs");

const CustomError = require('./customError')
const errorHeandler = require('./errorHeandler')


const validationFiles = function(arguments){
    let counterI = 0;
    let counterO = 0;
   
arguments.forEach((el) => {
    if (el == '-i') counterI++;
    if (el == '-o') counterO++;
})

const inputFile = arguments.indexOf("-i") !== -1 ? arguments[arguments.indexOf("-i") + 1] : undefined;
const outputFile = arguments.indexOf("-o") !== -1 ? arguments[arguments.indexOf("-o") + 1] : undefined;

const hasInputFile = fs.existsSync(inputFile)
const hasOutputFile = fs.existsSync(outputFile)
try{
if (!hasInputFile && counterI != 0) {
    throw new CustomError(`can't find the input file`)
}
if (!hasOutputFile && counterO != 0) {
    throw new CustomError(`can't find the output file`)
}}catch(err){
    errorHeandler(err)
}
return {inputFile, outputFile}
}

module.exports = validationFiles