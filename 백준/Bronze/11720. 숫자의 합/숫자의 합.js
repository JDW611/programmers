const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().split('\n');

const N = Number(input[0]);
const numStr = input[1];

let sum = 0;
for (let i = 0; i < N; i++) {
    sum += Number(numStr[i]);
}

console.log(sum);
