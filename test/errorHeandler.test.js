const errorHeandler = require('../errorHeandler')

describe('error heandler', function() {
    test('check to correct throw tipical error',()=>{
        const error = new Error
        const t = () => {
            errorHeandler(error) ;
                  };
                  expect(t).toThrow(Error);
                

    })
  
})