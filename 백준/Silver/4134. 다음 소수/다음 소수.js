const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

const T = input[0];
const result = [];

const prime = n => {
    if (n < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
};

for (let i = 1; i <= T; i++) {
    let n = input[i];

    while (!prime(n)) {
        n++;
    }
    result.push(n);
}

console.log(result.join('\n'));
