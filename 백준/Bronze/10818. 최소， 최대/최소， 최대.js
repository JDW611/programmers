const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().split('\n');

const N = Number(input[0]);
const array = input[1].split(' ').map(Number);

const result = [];

result.push(Math.min(...array));
result.push(Math.max(...array));

console.log(result.join(' '));
