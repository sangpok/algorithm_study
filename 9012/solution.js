const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const datas = fs.readFileSync(filePath).toString().trim().split('\n');

const checkPattern = (source) => {
  let parenthesisMatchingCount = 0;

  for (let i = 0; i < source.length; i++) {
    parenthesisMatchingCount =
      source[i] === '(' ? parenthesisMatchingCount + 1 : parenthesisMatchingCount - 1;
    if (parenthesisMatchingCount < 0) {
      return false;
    }
  }

  return !parenthesisMatchingCount;
};

function solution(datas) {
  console.log(
    datas
      .map((data) => {
        const parenthesisMatchingCount = checkPattern(data.trim());
        return parenthesisMatchingCount ? 'YES' : 'NO';
      })
      .join('\n')
  );
}

solution(datas.slice(1));
