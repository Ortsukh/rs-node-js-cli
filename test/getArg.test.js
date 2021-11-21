const getArg = require("../getArg");

describe('checking get arg', function() {
    test('check to correct get arg',()=>{
        const arr = ['-c', 'C1-C1-R0', '-i', './input.txt', '-o', './output.txt']
   
expect(typeof(getArg(arr))).toEqual("object");
    })
    
    
})