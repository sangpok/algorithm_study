const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(n, datas) {
  const stack = [];

  for (let dataIndex = 0; dataIndex < n; dataIndex++) {
    const currentData = datas[dataIndex];

    if (currentData) {
      stack.push(currentData);
    } else {
      stack.pop();
    }
  }

  let sum = 0;

  for (let index = 0, stackCount = stack.length; index < stackCount; index++) {
    sum += stack[index];
  }

  console.log(sum);
}

solution(Number(L), datas.map(Number));
