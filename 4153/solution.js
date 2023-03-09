const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const datas = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(datas) {
  console.log(
    datas
      .map((data) => data.split(' ').map(Number))
      .map((datas) => {
        const maxNumber = Math.max(...datas);
        const maxNumberIndex = datas.findIndex((value) => value === maxNumber);
        const restNumbers = datas.filter(
          (value, index) => value !== maxNumber && index !== maxNumberIndex
        );

        return restNumbers.map((value) => value ** 2).reduce((a, b) => a + b) === maxNumber ** 2
          ? 'right'
          : 'wrong';
      })
      .join('\n')
  );
}

solution(datas.slice(0, datas.length - 1));
