const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().split('\n');

const list = input[1].split(' ').map(Number);
const N = Number(input[0]);
const v = Number(input[2]);

function findInteger(array, v) {
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === v) {
            count += 1;
        }
    }

    return count;
}

const result = findInteger(list, v);
console.log(result);
