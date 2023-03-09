const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const datas = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(datas) {
  console.log(
    datas
      .map((data) => data.split(' ').map(Number))
      .map((data) => {
        const [rest, quotient] = [data[2] % data[0], data[2] / data[0]];

        const floorNum = !rest ? data[0] : rest;
        const roomNum = !rest ? quotient : ~~quotient + 1;

        return `${floorNum}${roomNum < 10 ? `0${roomNum}` : roomNum}`;
      })
      .join('\n')
  );
}

solution(datas.slice(1));
