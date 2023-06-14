const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(n) {
  for (let five = Math.floor(n / 5) + 1; five--; ) {
    const lastMoney = n - five * 5;

    if (lastMoney % 2 === 0) {
      console.log(five + lastMoney / 2);
      return;
    }
  }

  console.log(-1);
}

solution(Number(L));
