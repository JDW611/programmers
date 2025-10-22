const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().split('\n').map(Number);

function findMaxAndIndex(array) {
    let maxNum = array[0];
    for (const number of array) {
        if (maxNum < number) {
            maxNum = number;
        }
    }

    return [maxNum, array.indexOf(maxNum) + 1];
}

result = findMaxAndIndex(input);
console.log(result.join('\n'));
