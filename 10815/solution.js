const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [N, NCards, M, MCards] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(n, nCards, m, mCards) {
  nCards.sort((a, b) => a - b);

  const [minCard, maxCard] = [nCards[0], nCards[n - 1]];
  const answer = Array(m).fill(0);

  for (let cardIndex = mCards.length; cardIndex--; ) {
    const currentCard = mCards[cardIndex];

    if (currentCard < minCard || currentCard > maxCard) {
      continue;
    }

    let [low, high] = [0, n - 1];

    while (low <= high) {
      const mid = low + Math.floor((high - low) / 2);

      if (nCards[mid] === currentCard) {
        answer[cardIndex] = 1;
        break;
      }

      if (nCards[mid] > currentCard) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  }

  console.log(answer.join(' '));
}

solution(Number(N), NCards.split(' ').map(Number), Number(M), MCards.split(' ').map(Number));
