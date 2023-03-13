const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const datas = fs.readFileSync(filePath).toString().trim().split(' ');

function solution([x, y, w, h]) {
  console.log(Math.min(...[x, w - x, y, h - y]));
}

solution(datas.map(Number));
