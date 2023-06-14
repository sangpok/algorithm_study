const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(n, ropes) {
  ropes.sort((a, b) => b - a);

  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < n; i++) {
    max = Math.max(max, ropes[i] * (i + 1));
  }

  console.log(max);
}

solution(Number(L), datas.map(Number));
