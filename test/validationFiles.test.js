const validationFiles = require('../validationFiles')


describe('Validation input and output files', function() {
    test('check to correct files',()=>{

        const arr = ['-c', 'C1-C1-R0', '-i', './input.txt', '-o', './output.txt']
        const result = {"inputFile": "./input.txt", "outputFile": "./output.txt"}
expect(validationFiles(arr)).toEqual(result);
    })
    test('Сheck for input file existence',()=>{
        const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
        console.log = jest.fn();
        const arr = ['-c', 'C1-C1-R2', '-i', './input1.txt', '-o', './output.txt']
        validationFiles(arr)
expect(console.log.mock.calls[0][0]).toBe("Error: Can't find the input file")
expect(mockExit).toHaveBeenCalledWith(1)
  });
  test('Сheck for output file existence',()=>{
    const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
    console.log = jest.fn();
    const arr = ['-c', 'C1-C1-R2', '-i', './input.txt', '-o', './output1.txt']
    validationFiles(arr)
expect(console.log.mock.calls[0][0]).toBe("Error: Can't find the output file")
expect(mockExit).toHaveBeenCalledWith(1)
});
})