const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
// const datas = fs.readFileSync(filePath).toString().trim().split(' ');
const datas = fs.readFileSync(filePath).toString().trim().split('\n');

// const inputs = datas.at(0).split(' ').map(Number);

function solution(datas) {
  const datasNumber = datas.split(' ').map(Number);
  const minNumber = Math.min(...datasNumber);
  const maxNumber = Math.max(...datasNumber);

  console.log(`${minNumber} ${maxNumber}`);
}

solution(datas[1]);
