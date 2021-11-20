const CustomError = require('./customError')
const errorHeandler = require('./errorHeandler')

const vakidationConfig = function(arguments){

const config = arguments[arguments.indexOf("-c") + 1]
try{
 
const configArr = config.split("-");
configArr.forEach((el) => {
    if (el !== "C0" && el !== "C1" && el !== "A" && el !== "R0" && el !== "R1") {
        throw new CustomError('wrong config')
    }
})}

catch(err){
    errorHeandler(err)
}
return config
}

module.exports = vakidationConfig