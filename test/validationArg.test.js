const validationArg = require('../validationArg')


describe('Validation arguments', function() {
    test('Check on error without -c argument',()=>{
        const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
        console.log = jest.fn();
        const result = 'Error: No config'
        const arr = [ '-i', './input.txt', '-o', './output.txt', ]
        validationArg(arr)
expect(console.log.mock.calls[0][0]).toBe(result)
expect(mockExit).toHaveBeenCalledWith(1)
  });
    test('Check on error -c argument provided more than once',()=>{
        const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
        console.log = jest.fn();
        const result = 'Error: You provided -c argument more than once'
        const arr = ['-c', 'C1-C1-R0', '-i', './input.txt', '-o', './output.txt', '-c']
        validationArg(arr)
expect(console.log.mock.calls[0][0]).toBe(result)
expect(mockExit).toHaveBeenCalledWith(1)
  });
    test('Check on error -i argument provided more than once',()=>{
        const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
        console.log = jest.fn();
        const result = 'Error: You provided -i argument more than once'
        
        const arr = ['-c', 'C1-C1-R0', '-i', './input.txt', '-o', './output.txt', '-i']
        validationArg(arr)
expect(console.log.mock.calls[0][0]).toBe(result)
expect(mockExit).toHaveBeenCalledWith(1)
  });
  test('Check on error -o argument provided more than once',()=>{
    const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
    console.log = jest.fn();
    const result = 'Error: You provided -o argument more than once'
    
    const arr = ['-c', 'C1-C1-R0', '-i', './input.txt', '-o', './output.txt', '-o']
    validationArg(arr)
expect(console.log.mock.calls[0][0]).toBe(result)
expect(mockExit).toHaveBeenCalledWith(1)
});
})