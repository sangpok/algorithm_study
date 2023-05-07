const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(n, c, houses) {
  houses.sort((a, b) => a - b);

  let [low, high] = [0, Math.floor((houses[n - 1] - houses[0]) / (c - 1))];
  let result = 0;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    let previousHouse = houses[0];
    let count = 1;

    for (let houseIndex = 1; houseIndex < n; houseIndex++) {
      const currentHouse = houses[houseIndex];

      if (currentHouse - previousHouse >= mid) {
        count++;

        if (count > c) {
          break;
        }

        previousHouse = currentHouse;
      }
    }

    if (count >= c) {
      result = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  console.log(result);
}

solution(...L.split(' ').map(Number), datas.map(Number));
