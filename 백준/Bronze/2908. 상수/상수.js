const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().split(' ');

const n1 = Number(input[0].split('').reverse().join(''));
const n2 = Number(input[1].split('').reverse().join(''));

console.log(Math.max(n1, n2));
