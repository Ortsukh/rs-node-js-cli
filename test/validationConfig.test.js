const validationConfig = require('../validationConfig')


describe('Validation config', function() {
    test('check to correct config',()=>{
        const arr = ['-c', 'C1-C1-R0', '-i', './input.txt', '-o', './output.txt']
        const result = 'C1-C1-R0'
expect(validationConfig(arr)).toBe(result);
    })
    test('Check on error config',()=>{
        const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
        console.log = jest.fn();
        const result = 'Error : Wrong config'
        const arr = ['-c', 'C1-C1-R2', '-i', './input.txt', '-o', './output.txt']
        validationConfig(arr)
expect(console.log.mock.calls[0][0]).toBe(result)
expect(mockExit).toHaveBeenCalledWith(1)
  });
})
