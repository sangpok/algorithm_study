const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const datas = fs.readFileSync(filePath).toString().trim();

function solution(stringN, numberN) {
  const maxDigitSum = stringN.length * 9;
  const startNumber = numberN - maxDigitSum < 1 ? 1 : numberN - maxDigitSum;

  for (let constructorNumber = startNumber; constructorNumber <= numberN; constructorNumber++) {
    const partitionSum =
      constructorNumber +
      [...constructorNumber.toString()].reduce((acc, cur) => acc + Number(cur), 0);

    if (partitionSum === numberN) {
      console.log(constructorNumber);
      return;
    }
  }

  console.log(0);
}

solution(datas, Number(datas));
