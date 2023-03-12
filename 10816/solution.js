const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const datas = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(datas) {
  const 숫자카드 = new Map();

  datas[1]
    .split(' ')
    .map((data) => 숫자카드.set(Number(data), (숫자카드.get(Number(data)) || 0) + 1));

  console.log(
    datas[3]
      .split(' ')
      .map((data) => 숫자카드.get(Number(data)) || 0)
      .join(' ')
  );
}

solution(datas);
