const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const datas = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(datas) {
  const criteriaNum = Number(datas[0].split(' ')[1]);
  console.log(
    datas[1]
      .split(' ')
      .map(Number)
      .filter((data) => data < criteriaNum)
      .join(' ')
  );
}

solution(datas);
