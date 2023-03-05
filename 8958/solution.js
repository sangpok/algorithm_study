const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
// const datas = fs.readFileSync(filePath).toString().trim().split(' ');
const datas = fs.readFileSync(filePath).toString().trim().split('\n');

// const inputs = datas.at(0).split(' ').map(Number);

function solution(datas) {
  datas
    .slice(1)
    .map((data) => data.split('X'))
    .map((scoreData) =>
      scoreData.map((data) => (data.trim().length * (2 * 1 + (data.trim().length - 1) * 1)) / 2)
    )
    .map((scoreData) => scoreData.reduce((a, b) => a + b))
    .forEach((score) => console.log(score));
}

solution(datas);
