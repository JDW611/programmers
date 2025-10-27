const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().split('\n');

const S = input[0];
const i = Number(input[1]);

console.log(S[i - 1]);
