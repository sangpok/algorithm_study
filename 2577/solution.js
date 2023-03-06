const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const datas = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(datas) {
  const numberCounter = Object.fromEntries(
    Array(10)
      .fill()
      .map((_, index) => [index, 0])
  );

  [
    ...datas
      .map(Number)
      .reduce((a, b) => a * b)
      .toString(),
  ].map((num) => numberCounter[num]++);

  Object.values(numberCounter).forEach((count) => console.log(count));
}

solution(datas);
