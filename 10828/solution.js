const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const datas = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(datas) {
  let stack = [];
  let results = [];

  const commandMap = new Map([
    ['top', () => results.push(stack[stack.length - 1] || -1)],
    ['size', () => results.push(stack.length)],
    ['empty', () => results.push(!stack.length ? '1' : '0')],
    ['pop', () => results.push(stack.pop() || -1)],
    ['push', (element) => stack.push(element)],
  ]);

  datas
    .splice(1)
    .map((data) => data.trim())
    .forEach((data) => {
      const [command, element] = data.split(' ');
      const commandFn = commandMap.get(command);

      commandFn(element);
    });

  console.log(results.join('\n'));
}

solution(datas);
