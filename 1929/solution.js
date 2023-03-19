const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [m, n] = fs.readFileSync(filePath).toString().trim().split(' ');

const getPrimeNumbers = (n) => {
  let primeArray = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2);

  for (let i = 2; i * i <= n; i++) {
    if (primeArray[i]) {
      for (let j = i * i; j <= n; j += i) {
        primeArray[j] = false;
      }
    }
  }

  return new Set(primeArray.map((value, index) => (value ? index : 0)).filter((value) => value));
};

function solution(m, n) {
  console.log([...getPrimeNumbers(n)].filter((value) => value >= m).join('\n'));
}

solution(Number(m), Number(n));
