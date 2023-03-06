const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
// const datas = fs.readFileSync(filePath).toString().trim().split(' ');
const datas = fs.readFileSync(filePath).toString().trim();

// const inputs = datas.at(0).split(' ').map(Number);

function solution(datas) {
  console.log(datas.charCodeAt(0));
}

solution(datas);
