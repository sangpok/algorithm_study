const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(testCaseLength, testCases) {
  let printQueue = [];

  for (let i = 0; i < testCaseLength * 2; i += 2) {
    printQueue.push([...testCases[i], testCases[i + 1]]);
  }

  console.log(
    printQueue
      .map(([n, m, queue]) => {
        let mutatedQueue = queue.map((element, index) => ({
          priority: element,
          target: index === m,
        }));

        let printOrder = 1;

        while (true) {
          const shiftedElement = mutatedQueue.shift();
          const hasMorePriority = mutatedQueue.some(
            (element) => element.priority > shiftedElement.priority
          );

          if (shiftedElement.target && !hasMorePriority) {
            break;
          }

          if (hasMorePriority) {
            mutatedQueue.push(shiftedElement);
          } else {
            printOrder++;
          }
        }

        return printOrder;
      })
      .join('\n')
  );

  // console.log(printQueue);
}

solution(
  Number(L),
  datas.map((data) => data.split(' ').map(Number))
);
