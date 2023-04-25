const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(n, m, graphData) {
  // console.log(n, m, graphData);

  let zeroCount = 0;
  let tomatoQueue = [];

  for (let row = m; row--; ) {
    for (let col = n; col--; ) {
      if (graphData[row][col] === 1) {
        tomatoQueue.push([row, col]);
        continue;
      }

      if (!graphData[row][col]) {
        zeroCount++;
      }
    }
  }

  const directions = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];

  let day = 0;

  while (tomatoQueue.length) {
    const newQueue = [];

    for (let tomatoIndex = tomatoQueue.length; tomatoIndex--; ) {
      const currentTomatoPos = tomatoQueue[tomatoIndex];

      const row = currentTomatoPos[0];
      const col = currentTomatoPos[1];

      for (let directionIndex = directions.length; directionIndex--; ) {
        const currentDirection = directions[directionIndex];

        const dx = currentDirection[0];
        const dy = currentDirection[1];

        const nx = row + dx;
        const ny = col + dy;

        if (nx < 0 || nx >= m || ny < 0 || ny >= n) {
          continue;
        }

        if (graphData[nx][ny] !== 0) {
          continue;
        }

        graphData[nx][ny] = 1;
        zeroCount--;

        newQueue.push([nx, ny]);
      }
    }

    tomatoQueue = newQueue;
    day++;
  }

  console.log(zeroCount ? -1 : day - 1);
}

solution(
  ...L.split(' ').map(Number),
  datas.map((data) => data.split(' ').map(Number))
);
