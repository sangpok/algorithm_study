const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const datas = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

function solution(n, k) {
  const factorial = (n) =>
    Array(!n ? 1 : n)
      .fill()
      .map((_, index) => index + 1)
      .reduce((a, b) => a * b);

  const a = factorial(n);
  const b = factorial(n - k) * factorial(k);

  console.log(a / b);
}

solution(datas[0], datas[1]);
