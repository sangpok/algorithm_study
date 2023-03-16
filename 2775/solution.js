const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const datas = fs.readFileSync(filePath).toString().trim().split('\n');

// k층 n호
function solution([T, ...datas]) {
  const result = [];

  for (let i = 0; i <= T * 2 - 1; i += 2) {
    const [k, n] = [datas[i], datas[i + 1]];
    let array = Array(k + 1)
      .fill(1)
      .map((_) =>
        Array(n)
          .fill(1)
          .map((_, index) => index + 1)
      );

    for (let j = 1; j <= k; j++) {
      for (let k = 0; k < n; k++) {
        array[j][k] = array[j - 1].slice(0, k + 1).reduce((a, b) => a + b);
      }
    }

    // console.log('-');
    // console.log(array.map((value) => value.join('\t')).join('\n'));
    // console.log();
    // console.log(array[k][n - 1]);
    result.push(array[k][n - 1]);
  }

  console.log(result.join('\n'));
}

solution(datas.map(Number));
