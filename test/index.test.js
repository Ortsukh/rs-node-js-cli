const child_process = require("child_process");

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
});
