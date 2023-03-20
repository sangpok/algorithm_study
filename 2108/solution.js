const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(n, datas) {
  let answers = new Map([
    ['average', 0],
    ['mid', 0],
    ['mode', 0],
    ['range', 0],
  ]);

  let sum = 0;

  let midIndex = (n - 1) / 2;

  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;

  let modeMap = new Map();
  let modeValue = Number.MIN_SAFE_INTEGER;

  datas
    .sort((a, b) => a - b)
    .forEach((data, index) => {
      sum += data;

      if (index === n - 1) {
        const average = Number((sum / n).toFixed());
        const isNegativeZero = Object.is(average, -0);

        answers.set('average', isNegativeZero ? 0 : average);
      }

      if (index === midIndex) {
        answers.set('mid', data);
      }

      if (min > data) {
        min = data;
      }

      if (max < data) {
        max = data;
      }

      modeMap.set(data, (modeMap.get(data) || 0) + 1);
      if (modeValue < modeMap.get(data)) {
        modeValue = modeMap.get(data);
      }
    });

  let modes = [...modeMap.entries()].filter(([_, value]) => value === modeValue);

  answers.set('mode', modes.length > 1 ? modes[1][0] : modes[0][0]);
  answers.set('range', max - min);

  console.log([...answers.values()].join('\n'));
}

solution(Number(L), datas.map(Number));
