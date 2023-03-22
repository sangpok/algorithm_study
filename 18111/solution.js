const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution([n, m, b], datas) {
  let minDuration = Number.MAX_SAFE_INTEGER;
  let answer = [minDuration, 0];

  for (let currentHeight = 0; currentHeight <= 256; currentHeight++) {
    let [blockToBeDelete, blockToBeFill] = [0, 0];

    for (let dataIndex = 0, dataCount = n * m; dataIndex < dataCount; dataIndex++) {
      const blockHeight = datas[dataIndex];

      if (blockHeight > currentHeight) {
        blockToBeDelete += blockHeight - currentHeight;
        continue;
      }

      if (blockHeight < currentHeight) {
        blockToBeFill += currentHeight - blockHeight;
      }
    }

    if (b + blockToBeDelete < blockToBeFill) {
      continue;
    }

    const duration = blockToBeDelete * 2 + blockToBeFill * 1;

    if (minDuration > duration || (minDuration === duration && answer[1] < currentHeight)) {
      minDuration = duration;
      answer = [duration, currentHeight];
    }
  }

  console.log(answer.join(' '));
}

solution(L.split(' ').map(Number), datas.map((data) => data.split(' ').map(Number)).flat());
