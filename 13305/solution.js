const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(n, distances, prices) {
  let currentGasPrice = prices[0];
  let totalCost = 0n;

  for (let i = 0; i < n - 1; i++) {
    totalCost += currentGasPrice * distances[i];

    if (currentGasPrice > prices[i + 1]) {
      currentGasPrice = prices[i + 1];
    }
  }

  console.log(totalCost.toString());
}

solution(Number(L), ...datas.map((data) => data.split(' ').map(BigInt)));
