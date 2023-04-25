const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(n, m, graphData) {
  // console.log(n, m, graphData);

  const visited = new Set(`0,0`);

  let queue = [[[0, 0], 1]];

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  while (queue.length) {
    const newQueue = [];

    for (const [[row, col], distance] of queue) {
      if (row === n - 1 && col === m - 1) {
        console.log(distance);
        return;
      }

      for (const [dx, dy] of directions) {
        const nx = row + dx;
        const ny = col + dy;

        if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
          continue;
        }

        if (!graphData[nx][ny]) {
          continue;
        }

        if (visited.has(`${nx},${ny}`)) {
          continue;
        }

        visited.add(`${nx},${ny}`);
        newQueue.push([[nx, ny], distance + 1]);
      }
    }

    queue = newQueue;
  }
}

solution(
  ...L.split(' ').map(Number),
  datas.map((data) => data.split('').map(Number))
);
