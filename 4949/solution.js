const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const datas = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(datas) {
  let answer = [];

  for (let dataIndex = 0, dataCount = datas.length; dataIndex < dataCount; dataIndex++) {
    const currentData = datas[dataIndex];
    let bracketStack = [];
    let isNoBalanced = false;

    for (let charIndex = 0, charCount = currentData.length; charIndex < charCount; charIndex++) {
      const currentChar = currentData[charIndex];

      if (currentChar === '(' || currentChar === '[') {
        bracketStack.push(currentChar);
      } else if (currentChar === ')' || currentChar === ']') {
        const poppedBracket = bracketStack.pop() || '';

        if (
          (currentChar === ')' && poppedBracket !== '(') ||
          (currentChar === ']' && poppedBracket !== '[')
        ) {
          answer.push('no');
          isNoBalanced = true;
          break;
        }
      }
    }

    if (!isNoBalanced) {
      answer.push(!bracketStack.length ? 'yes' : 'no');
    }
  }

  console.log(answer.join('\n'));
}

solution(datas.splice(0, datas.length - 1).map((data) => data.trim()));
