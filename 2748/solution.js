const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const L = fs.readFileSync(filePath).toString();

function solution(n) {
  const dpTable = Array(n + 1).fill(0n);

  dpTable[0] = 0n;
  dpTable[1] = 1n;

  for (let dataIndex = 2; dataIndex <= n; dataIndex++) {
    dpTable[dataIndex] = dpTable[dataIndex - 1] + dpTable[dataIndex - 2];
  }

  console.log(String(dpTable[n]));
}

solution(Number(L));
