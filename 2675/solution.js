const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const datas = fs.readFileSync(filePath).toString().trim().split('\n');

// const inputs = datas.at(0).split(' ').map(Number);

function solution(datas) {
  const datasArray = datas.slice(1).map((data) => data.split(' '));
  const repeatedData = datasArray.map(([count, data]) =>
    [...data].map((value) => value.repeat(count)).join('')
  );
  repeatedData.forEach((value) => console.log(value));
}

solution(datas);
