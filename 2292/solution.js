const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const datas = fs.readFileSync(filePath).toString().trim();

// 끝에를 집중해보면
// 1 7 19 37 61
//  6 12 18 24

// n번째 방 껍질의 마지막 방 번호 = 1 + 6(1 + 2 + ... + (n-2))
// = 1 + 6 * ((n-2)*(n-1)/2)
// = 3n^2 - 3n + 1

// roomNumber = 3n^2 - 3n + 1

// n = (3 + √(12roomNumber - 3)) / 6

function solution(roomNumber) {
  console.log(~~((3 + Math.sqrt(12 * (roomNumber - 1) - 3)) / 6) || 0 + 1);
}

solution(datas);
