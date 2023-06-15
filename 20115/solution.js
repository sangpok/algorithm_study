const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, datas] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(n, drinks) {
  // a의 양을 xa + (xb / 2)로 만들고, b를 버리기
  // 큰 거를 다 선택하고, 작은 거를 절반 버려.

  // drinks.sort((a, b) => a - b);
  //[ 2, 3, 6, 9, 10 ]
  // [3, 6, 9, 11]
  // [6, 9, 12.5]
  // [9, 15.5]
  // [20]

  // [ 2, 3, 6, 9, 10 ]
  // [ 3, 6, 9, (10 + (2 / 2))]
  // [ 6, 9, (10 + (2 / 2)) + (3 / 2)]
  // [ 9, (10 + (2 / 2)) + (3 / 2) + (6 / 2)]
  // [ 10 + (2 / 2) + (3 / 2) + (6 / 2) + (9 / 2)]

  let max = drinks[0];

  console.log(
    drinks.reduce((a, b) => {
      if (max < b) {
        max = b;
      }

      return a + b;
    }) /
      2 +
      max / 2
  );
}

solution(Number(L), datas.split(' ').map(Number));
