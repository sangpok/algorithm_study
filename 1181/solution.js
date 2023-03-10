const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const datas = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(datas) {
  const words = [...new Set(datas.map((data) => data.trim()))];

  console.log(
    words
      .sort((a, b) => {
        if (a.length === b.length) {
          return a < b ? -1 : 1;
        }

        return a.length < b.length ? -1 : 0;
      })
      .join('\n')
  );
}

solution(datas.slice(1));
