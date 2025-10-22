let input = require('fs').readFileSync('/dev/stdin').toString();

function stringReverse(str) {
    let countToAllZero = 0;
    let countToAllOne = 0;

    if (str[0] === '0') {
        countToAllOne += 1;
    } else if (str[0] === '1') {
        countToAllZero += 1;
    }

    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] !== str[i + 1]) {
            if (str[i + 1] === '1') {
                countToAllZero += 1;
            }
            if (str[i + 1] === '0') {
                countToAllOne += 1;
            }
        }
    }

    return Math.min(countToAllOne, countToAllZero);
}

const result = stringReverse(input);

console.log(result);
