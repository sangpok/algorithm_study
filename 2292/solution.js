const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const datas = fs.readFileSync(filePath).toString().trim();

function solution(roomNumber) {
  if (roomNumber === 1) {
    console.log(1);
    return;
  }

  console.log(~~((3 + Math.sqrt(12 * roomNumber - 15)) / 6) + 1);
}

solution(datas);
