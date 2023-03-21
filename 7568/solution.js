const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(n, datas) {
  const result = [];

  datas.forEach(([weightA, heightA], indexA) => {
    let bodyRank = 1;

    datas.forEach(([weightB, heightB], indexB) => {
      if (indexA !== indexB && weightA < weightB && heightA < heightB) {
        bodyRank++;
      }
    });

    result.push(bodyRank);
  });

  console.log(result.join(' '));
}

solution(
  Number(L),
  datas.map((data) => data.split(' ').map(Number))
);
