const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(r, c, n, board) {
  if (n === 1) {
    console.log(board.map((a) => a.join('')).join('\n'));
    return;
  }

  if (!(n % 2)) {
    console.log('O'.repeat(c).concat('\n').repeat(r).trim());
    return;
  }

  const result = getA(r, c, board);

  if (n % 4 === 3) {
    console.log(result.map((a) => a.join('')).join('\n'));
    return;
  }

  if (n % 4 === 1) {
    const resultB = getA(r, c, result);
    console.log(resultB.map((a) => a.join('')).join('\n'));
  }

  return;
}

const getA = (r, c, board) => {
  const newBoard = Array.from(Array(r), () => Array(c).fill('O'));

  let queue = [];

  for (let i = r; i--; ) {
    for (let j = c; j--; ) {
      if (board[i][j] === 'O') {
        queue.push([i, j]);
      }
    }
  }

  for (let i = queue.length; i--; ) {
    const [boomR, boomC] = queue[i];

    newBoard[boomR][boomC] = '.';

    if (boomR - 1 >= 0) {
      newBoard[boomR - 1][boomC] = '.';
    }

    if (boomR + 1 < r) {
      newBoard[boomR + 1][boomC] = '.';
    }

    if (boomC - 1 >= 0) {
      newBoard[boomR][boomC - 1] = '.';
    }

    if (boomC + 1 < c) {
      newBoard[boomR][boomC + 1] = '.';
    }
  }

  return newBoard;
};

solution(
  ...L.split(' ').map(Number),
  datas.map((data) => data.split(''))
);
