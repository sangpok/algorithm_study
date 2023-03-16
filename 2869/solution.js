const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const datas = fs.readFileSync(filePath).toString().split(' ');

function solution([a, b, v]) {
  console.log(Math.ceil((v - b) / (a - b)));
}

solution(datas.map(Number));
