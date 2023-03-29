const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().split('\n');

function solution(n, datas) {
  const [zeroSum, oneSum] = [
    [1, 0],
    [0, 1],
  ];

  const answer = [];

  for (let dataIndex = 0, dataCount = n; dataIndex < dataCount; dataIndex++) {
    const currentValue = datas[dataIndex];

    if (!currentValue) {
      answer.push('1 0');
      continue;
    }

    if (currentValue === 1) {
      answer.push('0 1');
      continue;
    }

    if (zeroSum.length <= currentValue) {
      for (let sumIndex = zeroSum.length; sumIndex <= currentValue; sumIndex++) {
        zeroSum.push(zeroSum[sumIndex - 1] + zeroSum[sumIndex - 2]);
        oneSum.push(oneSum[sumIndex - 1] + oneSum[sumIndex - 2]);
      }
    }

    answer.push(`${zeroSum[currentValue]} ${oneSum[currentValue]}`);
  }

  console.log(answer.join('\n'));
}

solution(Number(L), datas.map(Number));
