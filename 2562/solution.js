const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const datas = fs.readFileSync(filePath).toString().trim().split('\n');

// const inputs = datas.at(0).split(' ').map(Number);

function solution(datas) {
  const datasNumber = datas.map(Number);
  const maxNumber = Math.max(...datasNumber);
  const lineNumber = datasNumber.findIndex((value) => value === maxNumber) + 1;

  console.log(maxNumber);
  console.log(lineNumber);
}

solution(datas);
