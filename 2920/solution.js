const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const datas = fs.readFileSync(filePath).toString().trim().split(' ');
// const datas = fs.readFileSync(filePath).toString().trim().split('\n');

// const inputs = datas.at(0).split(' ').map(Number);

function solution(datas) {
  const datasNumberArray = datas.map(Number);
  const gapArray = [];

  datasNumberArray.reduce((acc, cur) => {
    gapArray.push(acc - cur);
    return cur;
  });

  const gapConst = new Set(gapArray);

  if (gapConst.size !== 1) {
    console.log('mixed');
    return;
  }

  const orderResultMap = {
    '-1': 'ascending',
    1: 'descending',
  };

  console.log(orderResultMap[gapArray[0]]);
}

solution(datas);
