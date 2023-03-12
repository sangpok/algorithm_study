const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const datas = fs.readFileSync(filePath).toString().trim().split('\n');

class Node {
  constructor(data) {
    this._data = data;
    this._next = null;
  }
}

class Queue {
  constructor() {
    this._head = null;
    this._rear = null;
    this._length = 0;
  }

  enqueue(data) {
    const node = new Node(data);

    if (!this._head) {
      this._head = node;
    } else {
      this._rear._next = node;
    }

    this._rear = node;
    this._length++;
  }

  dequeue() {
    if (!this._head) {
      return null;
    }

    const data = this._head._data;
    this._head = this._head._next;
    this._length--;

    if (!this._length) {
      this._rear = null;
    }

    return data;
  }

  getHead() {
    return (this._head && this._head._data) || null;
  }

  getRear() {
    return (this._rear && this._rear._data) || null;
  }

  getQueue() {
    if (!this._head) {
      return null;
    }

    const node = this._head;
    const array = [];

    while (node) {
      array.push(node._data);
      node = node._next;
    }

    return array;
  }

  get size() {
    return this._length;
  }
}

function solution(datas) {
  const queue = new Queue();
  let results = [];

  const commandMap = new Map([
    ['push', (element) => queue.enqueue(element)],
    ['pop', () => results.push(queue.dequeue() || '-1')],
    ['size', () => results.push(queue.size)],
    ['empty', () => results.push(!queue.size ? '1' : '0')],
    ['front', () => results.push(queue.getHead() || '-1')],
    ['back', () => results.push(queue.getRear() || '-1')],
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
