
const fs = require("fs");
const path = require("path");

const CustomError = require('./customError')
const errorHeandler = require('./errorHeandler')


const validationFiles = function(arg){
    let counterI = 0;
    let counterO = 0;
   
arg.forEach((el) => {
    if (el == '-i' || el == '--input') counterI++;
    if (el == '-o' || el == '--output') counterO++;
})

const inputFile = path.join(__dirname, arg.indexOf("-i") !== -1 ? arg[arg.indexOf("-i") + 1] : undefined);
const outputFile = path.join(__dirname,arg.indexOf("-o") !== -1 ? arg[arg.indexOf("-o") + 1] : undefined);

const hasInputFile = fs.existsSync(inputFile)
const hasOutputFile = fs.existsSync(outputFile)
try{
if (!hasInputFile && counterI != 0) {
    throw new CustomError(`Error: Can't find the input file`)
}
if (!hasOutputFile && counterO != 0) {
    throw new CustomError(`Error: Can't find the output file`)
}}catch(err){
    errorHeandler(err)
}
return {inputFile, outputFile}
}

module.exports = validationFiles