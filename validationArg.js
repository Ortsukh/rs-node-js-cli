
const CustomError = require('./customError')
const errorHeandler = require('./errorHeandler')

const validationArg = function(arg){
    let counterI = 0;
    let counterO = 0;
    let counterC = 0;
arg.forEach((el) => {
    if (el == '-c') counterC++;
    if (el == '-i') counterI++;
    if (el == '-o') counterO++;
})
try{
    if (counterC === 0) {
        throw new CustomError('Error: no config')
    }
if (counterC > 1) {
    throw new CustomError('Error: You provided -c argument more than once')
}
if (counterI > 1) {
    throw new CustomError('Error: You provided -i argument more than once')
}
if (counterO > 1) {
    throw new CustomError('Error: You provided -o argument more than once')
}}
catch(err){
    errorHeandler(err)
}

}

module.exports = validationArg