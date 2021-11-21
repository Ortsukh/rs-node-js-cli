const vakidationConfig = require('../vakidationConfig')


describe('Validation config', function() {
    test('check to correct config',()=>{
        const arr = ['-c', 'C1-C1-R0', '-i', './input.txt', '-o', './output.txt']
        const result = 'C1-C1-R0'
expect(vakidationConfig(arr)).toBe(result);
    })
    test('Check on error config',()=>{
        const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
        console.log = jest.fn();
        const result = 'wrong config'
        const arr = ['-c', 'C1-C1-R2', '-i', './input.txt', '-o', './output.txt']
        vakidationConfig(arr)
expect(console.log.mock.calls[0][0]).toBe(result)
expect(mockExit).toHaveBeenCalledWith(1)
  });
})
