const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(n, datas) {
  const savedPasswordMap = new Map();

  datas.splice(0, n).map((data) => {
    const currentPasswordPair = data.split(' ');
    savedPasswordMap.set(currentPasswordPair[0], currentPasswordPair[1]);
  });

  console.log(datas.map((site) => savedPasswordMap.get(site.trim())).join('\n'));
}

solution(Number(L.split(' ')[0]), datas);
