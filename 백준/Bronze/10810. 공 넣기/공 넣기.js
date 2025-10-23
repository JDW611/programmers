const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().split('\n');

const N = Number(input[0].split(' ')[0]);
const M = Number(input[0].split(' ')[1]);

const result = new Array(N).fill(0);

let method = [];

for (let i = 0; i < M; i++) {
    method[i] = input[i + 1].split(' ').map(Number);
}

for (let j = 0; j < M; j++) {
    for (let k = method[j][0] - 1; k < method[j][1]; k++) {
        result.splice(k, 1, method[j][2]);
    }
}

console.log(result.join(' '));
