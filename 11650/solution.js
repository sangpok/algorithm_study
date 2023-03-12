const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const datas = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(datas) {
  console.log(
    datas
      .map((data) => data.split(' ').map(Number))
      .sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]))
      .map((data) => data.join(' '))
      .join('\n')
  );
}

solution(datas.splice(1));
