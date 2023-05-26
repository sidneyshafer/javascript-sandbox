const path = require('path');

const myFilePath = 'subfolder/anotherFolder/index.js';

// basename()
const base1 = path.basename(myFilePath);
const base2 = path.basename(myFilePath, '.js');

console.log(base2);

// extname()
const ext = path.extname(myFilePath);
console.log(ext);

// dirname()
const dir = path.dirname(myFilePath);
console.log(dir);

// join() - recommended to use join for creating file paths; gives you the relative path to the folder 
const myPath = path.join('subfolder', 'anotherFolder', 'index.js');
console.log(myPath);

// resolve() - gives you the absolute path
const myPath2 = path.resolve('subfolder', 'anotherFolder', 'index.js');
console.log(myPath2);

// __dirname
console.log(__dirname);

// __filename
console.log(__filename);
