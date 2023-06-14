const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const data = fs.readFileSync(filePath).toString().trim();

function solution(data) {
  const splitedData = data
    .split('XXXX')
    .map((last) => last.split('XX').join('BB'))
    .join('AAAA');

  console.log(splitedData.includes('X') ? -1 : splitedData);
}

solution(data);
