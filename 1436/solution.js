const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const datas = fs.readFileSync(filePath).toString().trim();

function solution(datas) {
  let number = 666;
  let count = 0;

  while (true) {
    if (number.toString().includes('666')) {
      count++;

      if (count === datas) {
        console.log(number);
        return;
      }
    }
    number++;
  }
}

solution(Number(datas));
