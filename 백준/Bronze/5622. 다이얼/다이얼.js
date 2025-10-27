const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().split('');

const obj = {
    3: 'ABC',
    4: 'DEF',
    5: 'GHI',
    6: 'JKL',
    7: 'MNO',
    8: 'PQRS',
    9: 'TUV',
    10: 'WXYZ',
};

let result = 0;

for (let i = 0; i < input.length; i++) {
    for (let j = 3; j <= 10; j++) {
        if (obj[j].includes(input[i])) {
            result += j;
        }
    }
}

console.log(result);
