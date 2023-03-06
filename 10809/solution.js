const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const datas = fs.readFileSync(filePath).toString().trim();

function solution(datas) {
  console.log(
    Array(26)
      .fill()
      .map((_, index) => String.fromCharCode(97 + index))
      .map((data) => [...datas].findIndex((value) => value === data))
      .join(' ')
  );
}

solution(datas);
