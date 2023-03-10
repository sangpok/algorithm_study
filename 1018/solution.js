const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const datas = fs.readFileSync(filePath).toString().trim().split('\n');

const standardBoardColors = {
  startWithB: 'BWBWBWBW',
  startWithW: 'WBWBWBWB',
};

const hasPatternWtih = (boardColor, boardColorIndex, matchedColor) => {
  return boardColor === matchedColor[boardColorIndex] ? 0 : 1;
};

const countOutOfPattern = (boardColors, startWith) => {
  return boardColors
    .map((boardColor, boardColorIndex) => hasPatternWtih(boardColor, boardColorIndex, startWith))
    .reduce((a, b) => a + b);
};

const countToFillByIndex = (boardColors, index, [patternA, patternB]) => {
  return !((index + 1) % 2)
    ? countOutOfPattern(boardColors, patternA)
    : countOutOfPattern(boardColors, patternB);
};

const getResultStartWith = (slicedBoard, type) => {
  const patternOrderMap = {
    W: [standardBoardColors.startWithW, standardBoardColors.startWithB],
    B: [standardBoardColors.startWithB, standardBoardColors.startWithW],
  };

  return slicedBoard
    .map((boardColors, index) => countToFillByIndex(boardColors, index, patternOrderMap[type]))
    .reduce((a, b) => a + b);
};

function solution(datas) {
  const [rowCount, colCount] = datas[0].split(' ').map(Number);
  const board = datas.slice(1).map((data) => data.trim());

  let minToFill = 64;

  for (let row = 0; row <= rowCount - 8; row++) {
    for (let col = 0; col <= colCount - 8; col++) {
      const slicedBoard = board
        .slice(row, row + 8)
        .map((boardColors) => [...boardColors.substring(col, col + 8)]);

      const resultWithB = getResultStartWith(slicedBoard, 'B');
      const resultWithW = getResultStartWith(slicedBoard, 'W');

      const min = Math.min(resultWithB, resultWithW);

      if (minToFill > min) {
        minToFill = min;
      }
    }
  }

  console.log(minToFill);
}

solution(datas);
