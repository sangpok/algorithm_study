const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, positions, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

const getIndex = (positions, value, low = 0, high = positions.length - 1, isHighIndex = true) => {
  let index = isHighIndex ? high : low;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    const currentPosition = positions[mid];

    if (value < currentPosition || (isHighIndex && value === currentPosition)) {
      high = mid - 1;
      index = isHighIndex ? mid : index;
    } else {
      low = mid + 1;
      index = !isHighIndex ? mid : index;
    }
  }

  return index;
};

function solution(m, positions, datas) {
  positions.sort((a, b) => a - b);

  const pointCounts = Array(m).fill();

  for (let dataIndex = m; dataIndex--; ) {
    const [dataLow, dataHigh] = datas[dataIndex];

    const lowIndex = getIndex(positions, dataLow, 0, positions.length - 1, false);
    const highIndex = getIndex(positions, dataHigh, 0, positions.length - 1);

    let pointCount = highIndex - lowIndex + 1;

    if (dataLow > positions[lowIndex]) {
      pointCount--;
    }

    if (dataHigh < positions[highIndex]) {
      pointCount--;
    }

    pointCounts[dataIndex] = pointCount;
  }

  console.log(pointCounts.join('\n'));
}

solution(
  Number(L.split(' ')[1]),
  positions.split(' ').map(Number),
  datas.map((data) => data.split(' ').map(Number))
);
