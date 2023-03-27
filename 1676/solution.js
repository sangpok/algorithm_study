const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const n = Number(fs.readFileSync(filePath).toString());

function solution(n) {
  let sum = BigInt(n);

  for (let i = n; i--; ) {
    sum *= BigInt(i) || 1n;
  }

  console.log(sum);

  const stringSum = String(sum);
  const stringSumLength = stringSum.length;

  for (let i = stringSumLength; i--; ) {
    if (Number(stringSum[i])) {
      console.log(stringSumLength - i - 1);
      return;
    }
  }

  console.log(0);
}

solution(n);
