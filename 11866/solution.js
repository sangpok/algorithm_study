const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const datas = fs.readFileSync(filePath).toString().trim().split(' ');

function solution([n, k]) {
  let people = Array(n)
    .fill()
    .map((_, index) => index + 1);

  if (k === 1) {
    console.log(`<${people.join(', ')}>`);
    return;
  }

  let index = 0;
  let result = [];

  while (people.length) {
    index = (index + (k - 1)) % people.length;
    result.push(...people.splice(index, 1));
  }

  console.log(`<${result.join(', ')}>`);
}

solution(datas.map(Number));
