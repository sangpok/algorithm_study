const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const L = fs.readFileSync(filePath).toString();

function solution(n) {
  const cacheSet = new Set();

  let BFSQueue = [n];
  let count = 0;

  while (BFSQueue.length) {
    const newQueue = [];

    for (let queueIndex = 0, queueCount = BFSQueue.length; queueIndex < queueCount; queueIndex++) {
      const currentNum = BFSQueue[queueIndex];

      if (currentNum === 1) {
        console.log(count);
        return;
      }

      if (!(currentNum % 3) && !cacheSet.has(currentNum / 3)) {
        newQueue.push(currentNum / 3);
        cacheSet.add(currentNum / 3);
      }

      if (!(currentNum % 2) && !cacheSet.has(currentNum / 2)) {
        newQueue.push(currentNum / 2);
        cacheSet.add(currentNum / 2);
      }

      if (!cacheSet.has(currentNum - 1)) {
        newQueue.push(currentNum - 1);
        cacheSet.add(currentNum - 1);
      }
    }

    BFSQueue = newQueue;
    count++;
  }
}

solution(Number(L));
