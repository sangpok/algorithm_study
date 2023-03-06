const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
// const datas = fs.readFileSync(filePath).toString().trim().split(' ');
const datas = fs.readFileSync(filePath).toString().trim();

// const inputs = datas.at(0).split(' ').map(Number);

function solution(datas) {
  const alphabetCount = {};

  datas
    .split('')
    .map((data) => data.toLowerCase())
    .map((data) => {
      alphabetCount[data] = (alphabetCount[data] || 0) + 1;
    });

  const maxCount = Math.max(...Object.values(alphabetCount));
  const maxItem = Object.entries(alphabetCount).filter(([_, value]) => value === maxCount);

  console.log(maxItem.length > 1 ? '?' : maxItem[0][0].toUpperCase());
}

solution(datas);
