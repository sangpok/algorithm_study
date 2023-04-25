const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(n, graphData) {
  // console.log(n, m, graphData);

  const visited = new Set();
  let houseCount = [];
  let blockCount = 0;

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      if (visited.has(`${row},${col}`)) {
        continue;
      }

      if (!graphData[row][col]) {
        continue;
      }

      const currentSize = explore(graphData, visited, n, row, col);

      if (currentSize > 0) {
        blockCount++;
        houseCount.push(currentSize);
      }
    }
  }

  console.log(blockCount);
  console.log(houseCount.sort((a, b) => a - b).join('\n'));
}

const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const explore = (graph, visited, n, row, col) => {
  let queue = [[row, col]];
  visited.add(`${row},${col}`);

  let size = 0;

  while (queue.length) {
    const newQueue = [];

    for (const [row, col] of queue) {
      if (!graph[row][col]) {
        continue;
      }

      size++;

      for (const [dx, dy] of directions) {
        const nx = row + dx;
        const ny = col + dy;

        if (nx < 0 || nx >= n || ny < 0 || ny >= n) {
          continue;
        }

        if (!graph[nx][ny]) {
          continue;
        }

        if (visited.has(`${nx},${ny}`)) {
          continue;
        }

        visited.add(`${nx},${ny}`);
        newQueue.push([nx, ny]);
      }
    }

    queue = newQueue;
  }

  return size;
};

solution(
  Number(L),
  datas.map((data) => data.split('').map(Number))
);
