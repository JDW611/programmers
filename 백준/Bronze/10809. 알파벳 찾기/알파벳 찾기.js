const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().split('\n');

const result = [];

for (let i = 97; i <= 122; i++) {
    result.push(input[0].indexOf(String.fromCharCode(i)));
}

console.log(result.join(' '));
