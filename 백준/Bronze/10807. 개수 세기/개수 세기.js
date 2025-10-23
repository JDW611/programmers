const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().split('\n');

const list = input[1].split(' ').map(Number);
const N = Number(input[0]);
const v = Number(input[2]);

function findInteger(array, v) {
    return array.filter(number => number === v).length;
}

const result = findInteger(list, v);
console.log(result);
