const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const datas = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(datas) {
  console.log(
    datas
      .map((data) =>
        data
          .split(' ')
          .map(Number)
          .sort((a, b) => b - a)
      )
      .map((datas) => (datas[0] ** 2 === datas[1] ** 2 + datas[2] ** 2 ? 'right' : 'wrong'))
      .join('\n')
  );
}

solution(datas.slice(0, datas.length - 1));
