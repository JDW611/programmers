const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().split('\n').map(Number);

function findMaxAndIndex(array) {
    let result = [];

    result.push(Math.max(...array));
    result.push(array.indexOf(result[0]) + 1);

    return result;
}

result = findMaxAndIndex(input);
console.log(result.join('\n'));
