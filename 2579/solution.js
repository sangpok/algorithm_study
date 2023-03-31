const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().split('\n');

function solution(n, datas) {
  const dpTable = [
    datas[0],
    Math.max(datas[0] + datas[1], datas[1]),
    Math.max(datas[0] + datas[2], datas[1] + datas[2]),
  ];

  if (n <= 3) {
    console.log(dpTable[n - 1]);
    return;
  }

  for (let dataIndex = 3; dataIndex < n; dataIndex++) {
    dpTable[dataIndex] = Math.max(
      dpTable[dataIndex - 3] + datas[dataIndex - 1] + datas[dataIndex],
      dpTable[dataIndex - 2] + datas[dataIndex]
    );
  }

  console.log(dpTable[n - 1]);
}

solution(Number(L), datas.map(Number));
