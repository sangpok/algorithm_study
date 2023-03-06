const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
// const datas = fs.readFileSync(filePath).toString().trim().split(' ');
const datas = fs.readFileSync(filePath).toString().trim().split(' ');

// const inputs = datas.at(0).split(' ').map(Number);

function solution(datas) {
  console.log(
    datas
      .map(Number)
      .map((data) => data ** 2)
      .reduce((a, b) => a + b) % 10
  );
}

solution(datas);
