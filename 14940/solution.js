const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function solution(r, c, map) {
  const distancedMap = Array.from(Array(r), () => Array(c).fill(-1));
  const visited = new Set([]);

  let [goalR, goalC] = [-1, -1];

  for (let i = r; i--; ) {
    for (let j = c, myMap = map, disMap = distancedMap; j--; ) {
      if (myMap[i][j] === '2') {
        [goalR, goalC] = [i, j];
        visited.add(`${goalR}, ${goalC}`);
        continue;
      }

      if (myMap[i][j] === '0') {
        disMap[i][j] = 0;
      }
    }
  }

  let queue = [[goalR, goalC]];
  let distance = 0;

  while (queue.length) {
    const newQueue = [];

    for (let i = queue.length, myQueue = queue; i--; ) {
      const [curR, curC] = myQueue[i];

      if (distancedMap[curR][curC] >= 0) {
        continue;
      }

      distancedMap[curR][curC] = distance;

      for (let j = 4, myMap = map; j--; ) {
        const [dx, dy] = directions[j];
        const nRow = curR + dx;
        const nCol = curC + dy;

        if (
          nRow < 0 ||
          nRow >= r ||
          nCol < 0 ||
          nCol >= c ||
          myMap[nRow][nCol] === '0' ||
          visited.has(`${nRow}, ${nCol}`)
        ) {
          continue;
        }

        newQueue.push([nRow, nCol]);
        visited.add(`${nRow}, ${nCol}`);
      }
    }

    distance++;
    queue = newQueue;
  }

  console.log(distancedMap.map((a) => a.join(' ')).join('\n'));
}

solution(
  ...L.split(' ').map(Number),
  datas.map((data) => data.trim().split(' '))
);
