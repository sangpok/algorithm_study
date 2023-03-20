const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(n, datas) {
  datas.sort((a, b) => a - b);

  let mid = datas[(n - 1) / 2];
  let [min, max] = [datas[0], datas[n - 1]];

  const modeMap = new Map();
  let modeValue = Number.MIN_SAFE_INTEGER;

  let average = Number(
    (
      datas.reduce((a, b) => {
        modeMap.set(b, (modeMap.get(b) || 0) + 1);

        const modeB = modeMap.get(b);
        modeValue = modeValue < modeB ? modeB : modeValue;

        return a + b;
      }, 0) / n
    ).toFixed()
  );

  const isNegativeZero = Object.is(average, -0);
  average = isNegativeZero ? 0 : average;

  const modes = [...modeMap.entries()].filter(([_, value]) => value === modeValue);
  let mode = modes.length > 1 ? modes[1][0] : modes[0][0];

  console.log([average, mid, mode, max - min].join('\n'));
}

solution(Number(L), datas.map(Number));
