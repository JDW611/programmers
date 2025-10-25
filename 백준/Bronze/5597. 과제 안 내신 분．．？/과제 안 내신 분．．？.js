const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().split('\n').map(Number);

const result = [];

for (let i = 1; i <= 30; i++) {
    if (!input.includes(i)) {
        result.push(i);
    }
}

console.log(Math.min(...result));
console.log(Math.max(...result));
