const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, M, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(computerCount, computerPairCount, computerPairs) {
  const networkMap = new Map();

  for (let pairIndex = computerPairCount; pairIndex--; ) {
    const [keyComputer, connectedComputer] = computerPairs[pairIndex].trim().split(' ');

    const keyComputerSet = networkMap.get(keyComputer) || new Set([]);
    const connectedComputerSet = networkMap.get(connectedComputer) || new Set([]);

    keyComputerSet.add(connectedComputer);
    connectedComputerSet.add(keyComputer);

    networkMap.set(keyComputer, keyComputerSet);
    networkMap.set(connectedComputer, connectedComputerSet);
  }

  const infectionSet = new Set(['1']);
  let queue = ['1'];

  while (queue.length) {
    const newQueue = [];

    for (let queueIndex = queue.length; queueIndex--; ) {
      const connections = networkMap.get(queue[queueIndex]);

      if (!connections) {
        continue;
      }

      for (
        let connectionIndex = connections.size, connectionLst = [...connections.values()];
        connectionIndex--;

      ) {
        const connection = connectionLst[connectionIndex];

        if (infectionSet.has(connection)) {
          continue;
        }

        newQueue.push(connection);
        infectionSet.add(connection);
      }
    }

    queue = newQueue;
  }

  console.log(infectionSet.size - 1);
}

solution(Number(L), Number(M), datas);
