const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = input[0];
const result = [];

const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
const lcm = (a, b) => (a * b) / gcd(a, b);

for (let i = 1; i <= N; i++) {
    const [n1, n2] = input[i].split(' ');
    result.push(lcm(n1, n2));
}

console.log(result.join('\n'));
