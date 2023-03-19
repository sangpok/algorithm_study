const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().split('\n');

function solution(L, datas) {
  const [k, n] = L.split(' ').map(Number);

  let [rangeStart, rangeEnd] = [1, Math.max(...datas)];
  let answer = -1;

  while (rangeStart <= rangeEnd) {
    const unitLength = ~~((rangeStart + rangeEnd) / 2);
    const splitedLanCount = datas.reduce((acc, cur) => acc + ~~(cur / unitLength), 0);

    if (splitedLanCount < n) {
      rangeEnd = unitLength - 1;
    } else {
      answer = unitLength > answer ? unitLength : answer;
      rangeStart = unitLength + 1;
    }
  }

  console.log(answer);
}

solution(L, datas.map(Number));
