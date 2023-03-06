const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const datas = fs.readFileSync(filePath).toString().trim().split(' ');

function solution(datas) {
  console.log(Math.max(...datas.map((data) => Number([...data].reverse().join('')))));
}

solution(datas);
