const fs = require('fs-extra');

const dir = './first';
console.log('first dir');
fs.ensureDirSync(dir);

console.log('first file');
const file = './first/file1.txt';
fs.ensureFileSync(file);

console.log('second dir');
const dirOne = './second';
fs.ensureDirSync(dirOne);

// console.log('file moved');
// fs.moveSync(file, dirOne+'/file1.txt');

console.log('third dir');
const dirThird = './third';
fs.ensureDirSync(dirThird);

// console.log('file moved');
// fs.moveSync('./second/file1.txt', dirThird+'/file1.txt');

console.log('file removed');
fs.removeSync(dirThird+'/file1.txt');

console.log('folders removed');
fs.removeSync(dir);
fs.removeSync(dirOne);
fs.removeSync(dirThird);