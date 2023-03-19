const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(n, datas) {
  let [nStack, stackCount] = [[], 1];
  let commandStack = [];

  for (let currentValue of datas) {
    while (stackCount <= currentValue) {
      nStack.push(stackCount++);
      commandStack.push('+');
    }

    const poppedValue = nStack.pop();

    if (poppedValue !== currentValue) {
      console.log('NO');
      return;
    }

    commandStack.push('-');
  }

  console.log(commandStack.join('\n'));
}

solution(Number(L), datas.map(Number));
