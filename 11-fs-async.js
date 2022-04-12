//  Major difference between Asynchronous functions are generally preferred over synchronous functions 
//  as they do not block the execution of the program, whereas synchronous functions block the execution of the program until it has finished processing.

const { readFile, writeFile } = require("fs");

//befor readfile
console.log('start')

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first= result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;

    writeFile(
      "./content/result-async.txt",
      `The new text values : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
        //inside writefile
        console.log('done with this task');
      }
    );
  });
});

//after readfile
console.log('starting the next one')
