// npm  - global command, comes with node
// npm  --version

// local dependency - can be use only in this particular project
// npm i <packageName>

// global dependency - can be used in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

// package.json  - manifest file (stores important info about project/package)

    //ways creating package.json
// manual approach (create package.json in the root, create properties etc)
// npm init (stet by step, press enter to skip)
// npm init -y (everything default using -y (y flag))

const _= require ('lodash');

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)