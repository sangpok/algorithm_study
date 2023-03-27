const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().split('\n');

function solution(datas) {
  const peopleMap = new Map();
  const answer = [];

  for (let dataIndex = 0, dataCount = datas.length; dataIndex < dataCount; dataIndex++) {
    const currentPerson = datas[dataIndex];
    const currentPersonCount = peopleMap.get(currentPerson);

    if (currentPersonCount) {
      answer.push(currentPerson);
      continue;
    }

    peopleMap.set(currentPerson, 1);
  }

  console.log(answer.length + '\n' + answer.sort().join('\n'));
}

solution(datas);
