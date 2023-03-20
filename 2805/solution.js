const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const L = fs.readFileSync(filePath).toString().trim();
// const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(n) {
  const fivePackCount = ~~(n / 5);

  if (!(n - fivePackCount * 5)) {
    console.log(fivePackCount);
    return;
  }

  for (let fivePack = fivePackCount; fivePack >= 0; fivePack--) {
    const threePack = (n - fivePack * 5) / 3;

    if (!(threePack - ~~threePack)) {
      console.log(threePack + fivePack);
      return;
    }
  }

  console.log(-1);
}

solution(Number(L));
