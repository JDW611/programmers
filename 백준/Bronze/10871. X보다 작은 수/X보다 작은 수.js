const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().split('\n');

const N = Number(input[0].split(' ')[0]);
const X = Number(input[0].split(' ')[1]);
const list = input[1].split(' ').map(Number);

const resultArray = [];

for (let i = 0; i < list.length; i++) {
    if (list[i] < X) {
        resultArray.push(list[i]);
    }
}

console.log(resultArray.join(' '));
