const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().split('\n');

const N = input[0].split(' ').map(Number)[0];
const M = input[0].split(' ').map(Number)[1];

const busket = [];

for (let i = 1; i <= N; i++) {
    busket.push(i);
}

for (let j = 1; j <= M; j++) {
    const [bus1, bus2] = input[j].split(' ').map(Number);
    let temp;

    temp = busket[bus1 - 1];
    busket[bus1 - 1] = busket[bus2 - 1];
    busket[bus2 - 1] = temp;
}

console.log(busket.join(' '));
