const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const datas = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(datas) {
  const [cardCount, goalNumber] = datas[0].split(' ').map(Number);
  const cardList = datas[1].split(' ').map(Number);

  let maxNumber = 0;

  cardList.forEach((valueA, indexA) => {
    const cardListTwo = cardList.slice(indexA + 1).forEach((valueB, indexB) => {
      const cardListThree = cardList.slice(indexA + (indexB + 1) + 1).map((valueC) => {
        const sum = valueA + valueB + valueC;
        const willMaxChange = goalNumber - sum < goalNumber - maxNumber;
        const notOver = sum <= goalNumber;

        if (willMaxChange && notOver) {
          maxNumber = sum;
        }
      });
    });
  });

  console.log(maxNumber);
}

solution(datas);
