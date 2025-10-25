const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

const result = new Set();

for (let i = 0; i < input.length; i++) {
    result.add(input[i] % 42);
}

console.log(result.size);
