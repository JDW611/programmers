const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();
const word = input.toUpperCase();
const obj = {};

for (let i = 0; i < word.length; i++) {
    if (obj[word[i]] !== undefined) {
        obj[word[i]] += 1;
    } else {
        obj[word[i]] = 1;
    }
}

let result = '';
let max = 0;

for (char in obj) {
    if (obj[char] > max) {
        max = obj[char];
        result = char;
    } else if (obj[char] === max) {
        result = '?';
    }
}
console.log(result);
