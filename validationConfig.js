const CustomError = require('./customError')
const errorHeandler = require('./errorHeandler')

const validationConfig = function(arg){

const config = arg.indexOf("-c") !== -1 ? arg[arg.indexOf("-c") + 1] : arg[arg.indexOf("--config") + 1]

try{
 
const configArr = config.split("-");
configArr.forEach((el) => {
    if (el !== "C0" && el !== "C1" && el !== "A" && el !== "R0" && el !== "R1") {
        throw new CustomError('Error : Wrong config')
    }
})
}

catch(err){
    errorHeandler(err)
}
return config
}

module.exports = validationConfig