const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const L = fs.readFileSync(filePath).toString();

class Node {
  constructor(value) {
    this._next = null;
    this._value = value;
  }
}

class Queue {
  constructor() {
    this._head = null;
    this._rear = null;
    this._length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this._length) {
      this._head = newNode;
    } else {
      this._rear._next = newNode;
    }

    this._rear = newNode;
    this._length++;
  }

  shift() {
    if (!this._length) {
      return null;
    }

    const shiftedNode = this._head;

    this._head = this._head._next;
    this._head._prev = null;

    this._length--;

    return shiftedNode._value;
  }

  get size() {
    return this._length;
  }
}

function solution(n) {
  const queue = new Queue();
  let count = 0;

  if (n === 1) {
    console.log(0);
    return;
  }

  queue.push(n - 1);

  if (n % 2 === 0) {
    queue.push(n / 2);
  }

  if (n % 3 === 0) {
    queue.push(n / 3);
  }

  while (true) {
    count++;

    for (let i = 0, size = queue.size; i < size; i++) {
      const shiftedValue = queue.shift();

      if (!shiftedValue) {
        return 0;
      }

      if (shiftedValue === 1) {
        console.log(count);
        return;
      }

      if (Number.isInteger(shiftedValue)) {
        queue.push(shiftedValue - 1);

        if (shiftedValue % 2 === 0) {
          queue.push(shiftedValue / 2);
        }

        if (shiftedValue % 3 === 0) {
          queue.push(shiftedValue / 3);
        }
      }
    }
  }
}

solution(Number(L), 0);
