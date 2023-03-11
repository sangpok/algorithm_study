const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const datas = fs.readFileSync(filePath).toString().trim().split('\n');

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

function solution(datas) {
  const sourceArray = datas.split(' ').map(Number);
  const maxNumber = Math.max(...sourceArray);
  const primeArray = getPrimeNumbers(maxNumber);

  console.log(sourceArray.reduce((acc, cur) => (primeArray.has(cur) ? acc + 1 : acc), 0));
}

solution(datas[1]);
