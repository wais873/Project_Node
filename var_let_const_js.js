// var is the old version vefor ES6 and it has a global scope and you can re-declare it every where
var test = 'hello';
test = 'hi';
if (true) {
  var test = 'last hello';
  console.log(test)
}
console.log(test);

// let is introduced with ES6 and you can not re-declare it, and its inside the {} is diffrent then the global value
let test1 = 'Hallo';
test1 = 'How are you';
if (true) {
  let test1 = 'I am fine';
  console.log(test1)
}
console.log(test1);

// Const is also advanced with ES6 it has same declaration lit Let, and its block scope
// but in const you canot change the vlaue once you define (test2 is 'hello') it can not take the value 'Hey you'
// how ever inside the {} test 2 will be treated as diffrent varialbles

const test2 = 'Hey';
//test2 = 'Hey You';
if (true) {
  const test2 = 'Hey You All'
  console.log(test2)
}
console.log(test2);