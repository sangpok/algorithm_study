const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution([n, m, b], datas) {
  const [mapWithoutSame, blockCountMap] = [new Set(), new Map()];

  for (let dataIndex = 0, dataCount = n * m; dataIndex < dataCount; dataIndex++) {
    const currentData = datas[dataIndex];

    mapWithoutSame.add(currentData);
    blockCountMap.set(currentData, (blockCountMap.get(currentData) || 0) + 1);
  }

  const blockHeights = [...mapWithoutSame.keys()];

  let minDuration = Number.MAX_SAFE_INTEGER;
  let answer = [minDuration, 0];

  for (let currentHeight = 0; currentHeight <= 256; currentHeight++) {
    let [blockToBeDelete, blockToBeFill] = [0, 0];

    for (
      let blockIndex = 0, blockCount = blockHeights.length;
      blockIndex < blockCount;
      blockIndex++
    ) {
      const blockHeight = blockHeights[blockIndex];

      if (blockHeight > currentHeight) {
        blockToBeDelete += (blockHeight - currentHeight) * blockCountMap.get(blockHeight);
        continue;
      }

      if (blockHeight < currentHeight) {
        blockToBeFill += (currentHeight - blockHeight) * blockCountMap.get(blockHeight);
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

solution(L.split(' ').map(Number), [].concat(...datas.map((data) => data.split(' ').map(Number))));
