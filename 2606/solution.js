const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, M, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

let answer = 0;

const dfs = (networkMap, visited, from) => {
  const connections = networkMap[from];

  for (let connectionIndex = connections.length; connectionIndex--; ) {
    const to = connections[connectionIndex];

    if (!visited[to]) {
      visited[to] = true;
      answer++;

      dfs(networkMap, visited, to);
    }
  }
};

function solution(computerCount, computerPairs) {
  const visited = Array(computerCount).fill(false);
  const networkMap = Array.from(Array(computerCount), () => Array());

  for (let pairIndex = computerPairs.length; pairIndex--; ) {
    let [computerA, computerB] = computerPairs[pairIndex].split(' ').map(Number);

    networkMap[computerA - 1].push(computerB - 1);
    networkMap[computerB - 1].push(computerA - 1);
  }

  visited[0] = true;

  dfs(networkMap, visited, 0);

  console.log(answer);
}

solution(Number(L), datas);
