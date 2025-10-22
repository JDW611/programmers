let input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);

function findPrime(n, m) {
    const primeSet = new Set();

    for (let i = 2; i <= m; i++) {
        primeSet.add(i);
    }

    for (let j = 2; j <= Math.sqrt(m); j++) {
        if (primeSet.has(j)) {
            for (let k = j * 2; k <= m; k += j) {
                primeSet.delete(k);
            }
        }
    }

    for (const num of primeSet) {
        if (num < n) {
            primeSet.delete(num);
        }
    }

    return [...primeSet];
}

const result = findPrime(input[0], input[1]);

console.log(result.join('\n'));
