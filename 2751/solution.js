const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const datas = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(datas) {
  console.log(
    datas
      .map(Number)
      .sort((a, b) => a - b)
      .join('\n')
  );
}

solution(datas.slice(1));
