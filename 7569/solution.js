const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(n, m, h, graphData) {
  // console.log(n, m, h, graphData);

  const tomatoBoxs = graphData.reduce(
    (acc, cur, index) => {
      acc[~~(index / m)].push(cur);
      return acc;
    },
    Array.from(Array(h), () => Array())
  );

  let zeroCount = 0;
  let tomatoQueue = [];

  for (let height = 0; height < h; height++) {
    for (let row = 0; row < m; row++) {
      for (let col = 0; col < n; col++) {
        if (tomatoBoxs[height][row][col] === 1) {
          tomatoQueue.push([height, row, col]);
          continue;
        }

        if (!tomatoBoxs[height][row][col]) {
          zeroCount++;
        }
      }
    }
  }

  const directions = [
    [-1, 0, 0],
    [1, 0, 0],
    [0, -1, 0],
    [0, 1, 0],
    [0, 0, -1],
    [0, 0, 1],
  ];

  let day = 0;

  while (tomatoQueue.length) {
    const newQueue = [];

    for (let tomatoIndex = tomatoQueue.length; tomatoIndex--; ) {
      const currentTomato = tomatoQueue[tomatoIndex];
      const [height, row, col] = currentTomato;

      for (let directionIndex = 6; directionIndex--; ) {
        const currentVector = directions[directionIndex];

        const [dh, dx, dy] = currentVector;
        const [nh, nx, ny] = [height + dh, row + dx, col + dy];

        if (nh < 0 || nh >= h || nx < 0 || nx >= m || ny < 0 || ny >= n) {
          continue;
        }

        if (tomatoBoxs[nh][nx][ny] !== 0) {
          continue;
        }

        tomatoBoxs[nh][nx][ny] = 1;
        zeroCount--;

        newQueue.push([nh, nx, ny]);
      }
    }

    day++;
    tomatoQueue = newQueue;
  }

  console.log(zeroCount ? -1 : day - 1);
}

solution(
  ...L.split(' ').map(Number),
  datas.map((data) => data.split(' ').map(Number))
);
