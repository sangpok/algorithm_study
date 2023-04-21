const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(n, m, v, graphData) {
  const graph = Array.from(Array(n), () => Array());

  graphData.forEach(([nodeA, nodeB]) => {
    graph[nodeA - 1].push(nodeB - 1);
    graph[nodeB - 1].push(nodeA - 1);
  });

  const sortedGraph = graph.map((nodes) => nodes.sort((a, b) => a - b));

  const [DFSRoute, DFSVisited] = [[], Array(n).fill(false)];
  const [BFSRoute, BFSVisited] = [[], Array(n).fill(false)];

  DFS(sortedGraph, v - 1, DFSVisited, DFSRoute);
  BFS(sortedGraph, v - 1, BFSVisited, BFSRoute);

  console.log(DFSRoute.join(' '));
  console.log(BFSRoute.join(' '));
}

const DFS = (graph, from, visited, DFSRoute) => {
  visited[from] = true;
  DFSRoute.push(from + 1);

  for (let vertex of graph[from]) {
    if (!visited[vertex]) {
      DFS(graph, vertex, visited, DFSRoute);
    }
  }
};

const BFS = (graph, from, visited, route) => {
  let queue = [from];

  while (queue.length) {
    const newQueue = [];

    for (let vertex of queue) {
      visited[vertex] = true;
      route.push(vertex + 1);

      for (let connectedVertex of graph[vertex]) {
        if (
          !visited[connectedVertex] &&
          !queue.includes(connectedVertex) &&
          !newQueue.includes(connectedVertex)
        ) {
          newQueue.push(connectedVertex);
        }
      }
    }

    queue = newQueue;
  }
};

solution(
  ...L.split(' ').map(Number),
  datas.map((data) => data.split(' ').map(Number))
);
