const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const datas = fs.readFileSync(filePath).toString().trim();

function solution(datas) {
  let cards = Array(datas)
    .fill()
    .map((_, index) => index + 1);

  while (cards.length > 1) {
    if (!(cards.length % 2)) {
      cards = cards.filter((_, index) => !((index + 1) % 2));
    } else {
      cards = cards.filter((_, index) => !((index + 1) % 2));
      cards = [...cards.slice(1), cards[0]];
    }
  }

  console.log(cards[0]);
}

// function solution(datas) {
//   let cards = Array(datas)
//     .fill()
//     .map((_, index) => index + 1);

//   while (cards.length > 1) {
//     console.log(cards.join(' '));
//     cards = [...cards.slice(2), cards[1]];
//   }

//   console.log(cards[0]);
// }

solution(Number(datas));
