const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution([n, m], trees) {
  let [rangeStart, rangeEnd] = [0, 1_000_000_000];
  let answer = Number.MIN_SAFE_INTEGER;

  while (rangeStart <= rangeEnd) {
    const midLength = ~~((rangeStart + rangeEnd) / 2);

    let slicedTreeLength = 0;
    for (let index = 0, treeCount = n; index < treeCount; index++) {
      const currentTreeLength = trees[index];

      if (currentTreeLength > midLength) {
        slicedTreeLength += currentTreeLength - midLength;
      }
    }

    if (slicedTreeLength >= m) {
      answer = answer < midLength ? midLength : answer;
      rangeStart = midLength + 1;
    } else {
      rangeEnd = midLength - 1;
    }
  }

  console.log(answer);
}

solution(L.split(' ').map(Number), datas[0].split(' ').map(Number));
