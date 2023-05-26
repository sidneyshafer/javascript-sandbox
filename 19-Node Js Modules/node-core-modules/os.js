const os = require('os');

// arch()
console.log(os.arch());

// platform()
console.log(os.platform());

if (os.platform() === 'win32') {
    console.log('You are on Windows');
} else if (os.platform() === 'darwin') {
    console.log('You are on a Mac');
} else {
    console.log('You are on Linux');
}

// cpus()
// console.log(os.cpus());

// freemem()
console.log(os.freemem());
console.log(`Free Memory: ${os.freemem() / 1024 / 1024 / 1024} GB`);

// totalmem()
console.log(os.totalmem());
console.log(`Total Memory: ${os.totalmem() / 1024 / 1024 / 1024} GB`);

// homedir
console.log(os.homedir());

//uptime
console.log(os.uptime());

const uptime = os.uptime();
const days = Math.floor(uptime / 60 / 60 / 24);
const hours = Math.floor(uptime / 60 / 60) % 24;
const mins = Math.floor(uptime / 60) % 60;
const secs = Math.floor(uptime) % 60;

console.log(`Uptime: ${days} days, ${hours} hours, ${mins} minutes, ${secs} seconds`);

// hostname()
console.log(os.hostname());