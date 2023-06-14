const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(n, tips) {
  tips.sort((a, b) => b - a);

  const kanghoTip = tips.reduce((acc, cur, index) => {
    const tip = cur - index;
    return tip > 0 ? acc + tip : acc;
  }, 0);

  console.log(kanghoTip);
}

solution(Number(L), datas.map(Number));
