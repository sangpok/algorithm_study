const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const datas = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(datas) {
  const memberList = datas
    .map((data) => data.split(' '))
    .map(([age, name]) => ({
      age: Number(age),
      name: name.trim(),
    }))
    .sort((a, b) => a.age - b.age)
    .map(({ age, name }) => `${age} ${name}`)
    .join('\n');

  console.log(memberList);
}

solution(datas.slice(1));
