const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(n, datas) {
  console.log(
    datas
      .sort(([xA, yA], [xB, yB]) => (yA === yB ? xA - xB : yA - yB))
      .map((data) => data.join(' '))
      .join('\n')
  );
}

solution(
  Number(L),
  datas.map((data) => data.split(' ').map(Number))
);
