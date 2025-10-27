const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().split('\n');

const T = input[0];
const result = [];

for (let i = 1; i <= T; i++) {
    const [time, str] = input[i].split(' ');

    let repeatStr = '';
    for (let k = 0; k < str.length; k++) {
        repeatStr += str[k].repeat(Number(time));
    }
    result.push(repeatStr);
}

console.log(result.join('\n'));
