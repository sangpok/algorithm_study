const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [NM, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(n, m, datas) {
  const titles = datas.splice(0, n).map((data) => {
    const [title, power] = data.split(' ');
    return [title, Number(power)];
  });

  const characters = datas.map((power) => Number(power));
  const titledCharacters = Array(m).fill();

  for (let characterIndex = m; characterIndex--; ) {
    const currentCharacter = characters[characterIndex];

    let [low, high] = [0, n];

    while (low <= high) {
      const mid = low + Math.floor((high - low) / 2);
      const currentTitlePower = titles[mid][1];

      if (mid < 0 || mid >= n) {
        break;
      }

      if (currentCharacter <= currentTitlePower) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    titledCharacters[characterIndex] = titles[low][0];
  }

  console.log(titledCharacters.join('\n'));
}

solution(...NM.split(' ').map(Number), datas);
