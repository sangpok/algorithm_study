const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(n, l, r, map) {
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const isValid = (row, col) => {
    return row >= 0 && row < n && col >= 0 && col < n;
  };

  const checkUnified = (row, col, nRow, nCol) => {
    const peopleGap = Math.abs(map[row][col] - map[nRow][nCol]);
    return l <= peopleGap && peopleGap <= r;
  };

  const canBeUnified = (row, col) => {
    for (const [dRow, dCol] of directions) {
      const [nRow, nCol] = [row + dRow, col + dCol];

      if (isValid(nRow, nCol) && checkUnified(row, col, nRow, nCol)) {
        return true;
      }
    }
  };

  const getUnion = (visited, startRow, startCol) => {
    const union = [[startRow, startCol]];

    let queue = [[startRow, startCol]];

    visited[startRow][startCol] = true;

    while (queue.length) {
      const newQueue = [];

      for (let queueIndex = queue.length; queueIndex--; ) {
        const [curR, curC] = queue[queueIndex];

        for (let [dRow, dCol] of directions) {
          const nRow = curR + dRow;
          const nCol = curC + dCol;

          if (!isValid(nRow, nCol)) {
            continue;
          }

          if (visited[nRow][nCol]) {
            continue;
          }

          if (!checkUnified(curR, curC, nRow, nCol)) {
            continue;
          }

          visited[nRow][nCol] = true;
          newQueue.push([nRow, nCol]);
        }
      }

      union.push(...newQueue);
      queue = newQueue;
    }

    return union.length !== 1 ? union : [];
  };

  let movingCount = 0;
  let keepChecking = true;

  while (keepChecking) {
    const visited = Array.from(Array(n), () => Array(n).fill(false));

    keepChecking = false;

    for (let row = n; row--; ) {
      for (let col = n; col--; ) {
        if (visited[row][col] || !canBeUnified(row, col)) {
          continue;
        }

        const union = getUnion(visited, row, col);

        if (union.length === 0) {
          continue;
        }

        const averagePeople = Math.floor(
          union.reduce((a, [row, col]) => a + map[row][col], 0) / union.length
        );

        union.forEach(([row, col]) => {
          map[row][col] = averagePeople;
        });

        keepChecking = true;
      }
    }

    if (keepChecking) {
      movingCount++;
    }
  }

  console.log(movingCount);
}

solution(
  ...L.split(' ').map(Number),
  datas.map((data) => data.trim().split(' ').map(Number))
);
