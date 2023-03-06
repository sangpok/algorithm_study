const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
// const datas = fs.readFileSync(filePath).toString().trim().split(' ');
const datas = fs.readFileSync(filePath).toString().trim().split('\n');

// const inputs = datas.at(0).split(' ').map(Number);

function solution(count, datas) {
  const datasNumber = datas.split(' ').map(Number);
  const maxScore = Math.max(...datasNumber);
  console.log(
    datasNumber.map((score) => (score / maxScore) * 100).reduce((a, b) => a + b) / +count
  );
}

solution(datas[0], datas[1]);
