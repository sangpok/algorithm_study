const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
// const datas = fs.readFileSync(filePath).toString().trim().split(' ');
const datas = fs.readFileSync(filePath).toString().trim().split('\n');

// const inputs = datas.at(0).split(' ').map(Number);

function solution(datas) {
  datas
    .map((data) =>
      data
        .split(' ')
        .map(Number)
        .reduce((a, b) => a + b)
    )
    .forEach((data) => console.log(data));
}

solution(datas);
