const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);
const scoreArr = input[1].split(' ').map(Number);

const maxScore = Math.max(...scoreArr);

let average = 0;

for (const score of scoreArr) {
    average += (score / maxScore) * 100;
}

console.log(average / N);
