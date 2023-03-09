const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const datas = fs.readFileSync(filePath).toString().trim().split(" ");

function solution(numA, numB) {
  const getGCD = (a, b) => !(a % b) ? b : gcd(b, a % b);
  const getLCM = (a, b, gcd) = a * b / gcd;
  
  const gcd = getGCD(numA, numB);
  const lcm = getLCM(numA, numB, gcd);

  console.log(gcd);
  console.log(lcm);
}

solution(datas[0], datas[1]);
