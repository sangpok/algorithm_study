const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const datas = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(datas) {
  const sourceArray = new Set(datas[1].split(' ').map(Number));
  const matchArray = datas[3].split(' ').map(Number);

  console.log(
    matchArray
      .map((value) => {
        return sourceArray.has(value) ? 1 : 0;
      })
      .join('\n')
  );
}

solution(datas);
