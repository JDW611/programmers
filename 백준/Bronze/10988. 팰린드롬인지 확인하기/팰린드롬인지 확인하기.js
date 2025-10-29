const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('');

let result = 1;

for (let i = 0; i < input.length; i++) {
    if (input[i] !== input[input.length - 1 - i]) {
        result = 0;
        break;
    }
}

console.log(result);
