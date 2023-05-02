const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const L = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(n) {
  let [low, high] = [0, n];
  let result = -1;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    if (mid ** 2 >= n) {
      high = mid - 1;
      result = mid;
    } else {
      low = mid + 1;
    }
  }

  console.log(result);
}

solution(Number(L));
