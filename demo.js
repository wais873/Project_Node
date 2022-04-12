const {Buffer} = require ('buffer')
const buf = Buffer.allocUnsafe(10);
console.log(buf);
buf.fill(0)

console.log(buf)