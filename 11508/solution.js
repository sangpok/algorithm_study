// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
// const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const [n, ...prices] = input;

  function solution(n, prices) {
    prices.sort((a, b) => b - a);

    let totalPrice = prices.reduce((acc, cur, index) => {
      return index % 3 === 2 ? acc : acc + cur;
    }, 0);

    console.log(totalPrice);
  }

  solution(n, prices.map(Number));
  process.exit();
});

// solution(Number(L), datas.map(Number));
