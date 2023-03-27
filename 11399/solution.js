const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(n, datas) {
  let [timeSum, currentTime] = [0, 0];
  let sortedDatas = datas.sort((a, b) => a - b);

  for (let dataIndex = 0, dataCount = n; dataIndex < dataCount; dataIndex++) {
    currentTime += sortedDatas[dataIndex];
    timeSum += currentTime;
  }

  console.log(timeSum);
}

solution(Number(L), datas[0].split(' ').map(Number));
