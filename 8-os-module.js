const os = require('os')

// info about current user
const user = os.userInfo()

console.log(user)

// We could use the ES6 also
//import { userInfo, uptime, type, release as _release, totalmem, freemem } from 'os'
// const currentOS = {
//     name: type(),
//     release: _release(),
//     totalMem: totalmem(),
//     freeMem: freemem(),
// }


// Method returns the system uptime in seconds

console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}



console.log(currentOS)