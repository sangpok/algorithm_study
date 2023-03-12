const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const datas = fs.readFileSync(filePath).toString().trim().split('\n');

// class Node {
//   constructor(data) {
//     this._data = data;
//     this._prev = null;
//     this._next = null;
//   }
// }

// class Deque {
//   constructor() {
//     this._head = null;
//     this._rear = null;
//     this._length = 0;
//   }

//   get size() {
//     return this._length;
//   }

//   get isEmpty() {
//     return this._length === 0;
//   }

//   get head() {
//     return this._head && this._head._data;
//   }

//   get rear() {
//     return this._rear && this._rear._data;
//   }

//   getQueue() {
//     let array = [];
//     let node = this._head;

//     while (node) {
//       array.push(node._data);
//       node = node._next;
//     }

//     return array;
//   }

//   pushFront(value) {
//     const node = new Node(value);

//     if (!this._head) {
//       this._head = node;
//       this._rear = node;
//     } else {
//       node._next = this._head;
//       this._head._prev = node;
//       this._head = node;

//       if (this._length === 1) {
//         this._rear._prev = node;
//       }
//     }

//     this._length++;
//   }

//   popFront() {
//     if (!this._head) {
//       return null;
//     }

//     const data = this._head._data;
//     this._head = this._head._next;

//     this._length--;

//     if (!this._length) {
//       this._head = null;
//       this._rear = null;
//     }

//     return data;
//   }

//   pushBack(value) {
//     const node = new Node(value);

//     if (!this._rear) {
//       this._head = node;
//       this._rear = node;
//     } else {
//       node._prev = this._rear;
//       this._rear._next = node;
//       this._rear = node;

//       if (this._length === 1) {
//         this._head._next = node;
//       }
//     }

//     this._length++;
//   }

//   popBack() {
//     if (!this._rear) {
//       return null;
//     }

//     const data = this._rear._data;
//     this._rear = this._rear._prev;

//     this._length--;

//     if (!this._length) {
//       this._head = null;
//       this._rear = null;
//     } else {
//       this._rear._next = null;
//     }

//     return data;
//   }
// }

function solution(datas) {
  const deque = [];
  let results = [];

  const commandMap = new Map([
    ['push_front', (element) => deque.unshift(element)],
    ['push_back', (element) => deque.push(element)],
    ['pop_front', () => results.push(deque.shift() || -1)],
    ['pop_back', () => results.push(deque.pop() || -1)],
    ['size', () => results.push(deque.length)],
    ['empty', () => results.push(!deque.length ? 1 : 0)],
    ['front', () => results.push(deque[0] || -1)],
    ['back', () => results.push(deque[deque.length - 1] || -1)],
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
