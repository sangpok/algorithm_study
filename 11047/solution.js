const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(k, datas) {
  let currentMoney = k;
  let currentUnitIndex = datas.length - 1;
  let coinCount = 0;

  while (currentMoney) {
    const currentUnit = Number(datas[currentUnitIndex]);

    if (currentUnit <= currentMoney) {
      const currentCoinCount = ~~(currentMoney / currentUnit);

      coinCount += currentCoinCount;
      currentMoney -= currentCoinCount * currentUnit;
    }

    currentUnitIndex--;
  }

  console.log(coinCount);
}

solution(Number(L.split(' ')[1]), datas);
