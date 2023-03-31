const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().split('\n');

function solution(n, datas) {
  const dpTable = [1, 2, 4, 7, 13, 24];
  const maxNumber = Math.max(...datas);

  for (let dpIndex = 6; dpIndex <= maxNumber; dpIndex++) {
    dpTable[dpIndex] = dpTable[dpIndex - 1] + dpTable[dpIndex - 2] + dpTable[dpIndex - 3];
  }

  const answer = [];

  for (let dataIndex = 0; dataIndex < n; dataIndex++) {
    const currentValue = datas[dataIndex];
    answer.push(dpTable[currentValue - 1]);
  }

  console.log(answer.join('\n'));
}

solution(Number(L), datas.map(Number));
