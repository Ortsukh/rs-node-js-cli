const child_process = require("child_process");
const fs = require("fs");
const { dirname } = require("path");
const path = require("path");

const pathToOutput = path.join(__dirname.slice(0,-5),"./output.txt")
const pathToInput = path.join(__dirname.slice(0,-5),"./input.txt")

describe("test with scenarios", function () {
  test("Error scenario 1: Input: User passes the same cli argument twice; Result: Error message is shown; e.g. input: node my_caesar_cli -c C1-C1-A-R0 -c C0 result: Error: You provided some argument more than once", (done) => {
    const childProcess = child_process.exec(
      'node index -c "R0" -i "./input.txt" -o "./output.txt" -c'
    );
    childProcess.stdout.on("data", (data) => {
      try {
        expect(data.trim()).toEqual(
          "Error: You provided -c argument more than once"
        );
        done();
      } catch (err) {
        done(err);
      }
    });
  });
  test("Error scenario 2: Input: User doesn't pass -c or --config argument", (done) => {
    const childProcess = child_process.exec(
      'node index -i "./input.txt" -o "./output.txt" '
    );

    childProcess.stdout.on("data", (data) => {
      try {
        expect(data.trim()).toEqual(
          "Error: No config"
        );
        done();
      } catch (err) {
        done(err);
      }
    });
  });
  test("Error scenario 3: Input: User passes -i argument with path that doesn't exist or with no read access; Result: Error message is shown", (done) => {
    const childProcess = child_process.exec(
      'node index -c "R0" -i "./input.tx1t" -o "./output.txt" '
    );

    childProcess.stdout.on("data", (data) => {
      try {
        expect(data.trim()).toEqual(
          "Error: Can't find the input file"
        );
        done();
      } catch (err) {
        done(err);
      }
    });
  });
  test("Error scenario 4: Input: User passes -o argument with path to directory that doesn't exist or with no read access; Result: Error message is shown;", (done) => {
    const childProcess = child_process.exec(
      'node index -c "R0" -i "./input.txt" -o "./output.1txt" '
    );

    childProcess.stdout.on("data", (data) => {
      try {
        expect(data.trim()).toEqual(
          "Error: Can't find the output file"
        );

        done();
      } catch (err) {
        done(err);
      }
    });
  });
  test("Error scenario 5: Input: User passes incorrent symbols in argument for --config; Result: Error message is shown;", (done) => {
    const childProcess = child_process.exec(
      'node index --config "R3" -i "./input.txt" -o "./output.txt" '
    );

    childProcess.stdout.on("data", (data) => {
      try {
        expect(data.trim()).toEqual(
          "Error : Wrong config"
        );

        done();
      } catch (err) {
        done(err);
      }
    });
  });
  test("Error scenario 6: Input: User passes correct sequence of symbols as argument for --config that matches regular expression; Result: test passed", (done) => {
    const example = 'a'
    const tempIn = fs.readFileSync(pathToInput, 'utf-8')
    const tempOut = fs.readFileSync(pathToOutput, 'utf-8')
     fs.writeFileSync(pathToInput, example)
     const childProcess = child_process.exec(
      'node index --config "R0-R1-C0-C1-A" -i "./input.txt" -o "./output.txt" '
    );
    const result = 'z'
    childProcess.stdout.on("end", (data) => {
      try {
        const outputFile = fs.readFileSync(pathToOutput, 'utf-8')
        expect(outputFile.slice(-example.length)).toEqual(
            result
        );
        fs.writeFileSync(pathToInput, tempIn)
        fs.writeFileSync(pathToOutput, tempOut)
        done();
      } catch (err) {
        done(err);
      }
    });
  });
  test("Error scenario 7.2: take cipher usage scenarios from first task description usage examples.", (done) => {
const example = 'This is secret. Message about "_" symbol!'
   const tempIn = fs.readFileSync(pathToInput, 'utf-8')
   const tempOut = fs.readFileSync(pathToOutput, 'utf-8')
    fs.writeFileSync(pathToInput, example)
    const childProcess = child_process.exec(
      'node index --config "C1-C1-R0-A" -i "./input.txt" -o "./output.txt" '
    );
        
    const result = 'Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!'
    childProcess.stdout.on("end", (data) => {
      try {
        const outputFile = fs.readFileSync(pathToOutput, 'utf-8')
        expect(outputFile.slice(-example.length)).toEqual(
            result
        );
        fs.writeFileSync(pathToInput, tempIn)
        fs.writeFileSync(pathToOutput, tempOut)
        done();
      } catch (err) {
        done(err);
      }
    });
  });
  test("Error scenario 7.3: take cipher usage scenarios from first task description usage examples.", (done) => {
    const example = 'This is secret. Message about "_" symbol!'
       const tempIn = fs.readFileSync(pathToInput, 'utf-8')
       const tempOut = fs.readFileSync(pathToOutput, 'utf-8')
        fs.writeFileSync(pathToInput, example)
        const childProcess = child_process.exec(
          'node index --config "C1-C0-A-R1-R0-A-R0-R0-C1-A" -i "./input.txt" -o "./output.txt" '
        );
            
        const result = 'Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!'
        childProcess.stdout.on("end", (data) => {
          try {
            const outputFile = fs.readFileSync(pathToOutput, 'utf-8')
            expect(outputFile.slice(-example.length)).toEqual(
                result
            );
            fs.writeFileSync(pathToInput, tempIn)
            fs.writeFileSync(pathToOutput, tempOut)
            done();
          } catch (err) {
            done(err);
          }
        });
      });
      test("Error scenario 7.4: take cipher usage scenarios from first task description usage examples.", (done) => {
        const example = 'This is secret. Message about "_" symbol!'
           const tempIn = fs.readFileSync(pathToInput, 'utf-8')
           const tempOut = fs.readFileSync(pathToOutput, 'utf-8')
            fs.writeFileSync(pathToInput, example)
            const childProcess = child_process.exec(
              'node index --config "A-A-A-R1-R0-R0-R0-C1-C1-A" -i "./input.txt" -o "./output.txt" '
            );
                
            const result = 'Hvwg wg gsqfsh. Asggous opcih "_" gmapcz!'
            childProcess.stdout.on("end", (data) => {
              try {
                const outputFile = fs.readFileSync(pathToOutput, 'utf-8')
                expect(outputFile.slice(-example.length)).toEqual(
                    result
                );
                fs.writeFileSync(pathToInput, tempIn)
                fs.writeFileSync(pathToOutput, tempOut)
                done();
              } catch (err) {
                done(err);
              }
            });
          });
          test("Error scenario 7.5: take cipher usage scenarios from first task description usage examples.", (done) => {
            const example = 'This is secret. Message about "_" symbol!'
               const tempIn = fs.readFileSync(pathToInput, 'utf-8')
               const tempOut = fs.readFileSync(pathToOutput, 'utf-8')
                fs.writeFileSync(pathToInput, example)
                const childProcess = child_process.exec(
                  'node index --config "C1-R1-C0-C0-A-R0-R1-R1-A-C1" -i "./input.txt" -o "./output.txt" '
                );
                    
                const result = 'This is secret. Message about "_" symbol!'
                childProcess.stdout.on("end", (data) => {
                  try {
                    const outputFile = fs.readFileSync(pathToOutput, 'utf-8')
                    expect(outputFile.slice(-example.length)).toEqual(
                        result
                    );
                    fs.writeFileSync(pathToInput, tempIn)
                    fs.writeFileSync(pathToOutput, tempOut)
                    done();
                  } catch (err) {
                    done(err);
                  }
                });
              });

});
