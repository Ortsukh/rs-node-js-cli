const heandler = (err)=>{
    const {isCustom} = err;
    if(isCustom){
        console.log(err.message);
    }
    else throw err
    process.exit(1)
    }
module.exports = heandler