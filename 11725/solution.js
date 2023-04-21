const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(n, graphData) {
  const graph = Array.from(Array(n), () => Array());

  graphData.forEach(([vertexA, vertexB]) => {
    graph[vertexA - 1].push(vertexB - 1);
    graph[vertexB - 1].push(vertexA - 1);
  });

  const visited = Array(n).fill(false).fill(true, 0, 1);
  const parentMap = Array(n).fill();
  let queue = [0];

  while (queue.length) {
    const newQueue = [];

    for (let queueIndex = 0, queueCount = queue.length; queueIndex < queueCount; queueIndex++) {
      const currentVertexs = graph[queue[queueIndex]];

      for (let vertexIndex = 0; vertexIndex < currentVertexs.length; vertexIndex++) {
        const currentVertex = currentVertexs[vertexIndex];

        if (visited[currentVertex]) {
          continue;
        }

        visited[currentVertex] = true;
        parentMap[currentVertex] = queue[queueIndex] + 1;
        newQueue.push(currentVertex);
      }
    }

    queue = newQueue;
  }

  console.log(parentMap.join('\n').trim());
}

solution(
  Number(L),
  datas.map((data) => data.split(' ').map(Number))
);
