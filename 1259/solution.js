const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const datas = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(datas) {
  const result = datas
    .map((data) => {
      data = data.trim();

      if (data === '0') {
        return;
      }

      const middleIndex = !(data.length % 2) ? data.length / 2 : (data.length - 1) / 2;

      for (let i = 0; i < middleIndex; i++) {
        if (data[i] !== data[data.length - 1 - i]) {
          return 'no';
        }
      }

      return 'yes';
    })
    .join('\n')
    .trim();

  console.log(result);
}

solution(datas);
