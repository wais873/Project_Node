//  Major difference between Asynchronous functions are generally preferred over synchronous functions 
//  as they do not block the execution of the program, whereas synchronous functions block the execution of the program until it has finished processing.

const { readFileSync, writeFileSync } = require("fs");

console.log('start')

// it will be same as
// const fs = require('fs');
// fs.read
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// node will look for file "result-sync.txt" if its not exist it will creat it and puts the value "Here comes the result",

// writeFileSync("./content/result-sync.txt", `Here comes the result: ${first}, ${second}`);

// and if file exist it will overwrite the file whit new value.

//if we want to append to the file we need to add one more argument which basically an object: {flag: 'a'} and a is for append
writeFileSync(
  "./content/result-sync.txt",
  `Here comes the result: ${first}, ${second}`,
  { flag: "a" }
);

console.log(first, second);

console.log('done with this task')
console.log('starting the next one')
