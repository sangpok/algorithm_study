const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const L = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(s) {
  let [low, high] = [1, s - 1];

  if (s === 1) {
    console.log(1);
    return;
  }

  while (low <= high) {
    const mid = low + ~~((high - low) / 2);
    const sum = (mid * (1 + mid)) / 2;

    if (sum > s) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  console.log(low - 1);
}

solution(Number(L));
