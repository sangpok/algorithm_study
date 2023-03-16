const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const datas = fs.readFileSync(filePath).toString().split('\n');

function solution(datas) {
  const alphabetMap = new Map(
    Array(26)
      .fill()
      .map((_, index) => [String.fromCharCode(97 + index), index + 1])
  );

  let [hashing, r] = [0, 1];

  for (let i = 0; i < datas.length; i++) {
    hashing += alphabetMap.get(datas[i]) * r;
    hashing %= 1234567891;
    r = (r * 31) % 1234567891;
  }

  console.log(hashing);
}

solution(datas[1].trim());
