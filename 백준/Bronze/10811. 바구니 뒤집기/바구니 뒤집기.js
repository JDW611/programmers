const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = input[0].split(' ').map(Number)[0];
const M = input[0].split(' ').map(Number)[1];

const basket = [];

for (let i = 1; i <= N; i++) {
    basket.push(i);
}

for (let j = 1; j <= M; j++) {
    const [bas1, bas2] = input[j].split(' ').map(Number);

    const reverseArr = basket.slice(bas1 - 1, bas2).reverse();

    basket.splice(bas1 - 1, reverseArr.length, ...reverseArr);
}

console.log(basket.join(' '));
