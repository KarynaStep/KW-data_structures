class IteratorLinkedQueue {
  constructor(queue) {
    this.queue = queue;
    this.currentItem = this.queue.head;
  }
  next() {
    return {
      value:
        this.currentItem > this.queue.tail
          ? undefined
          : this.queue[`_${this.currentItem++}`],
      done: this.currentItem > this.queue.tail,
    };
  }
}

class Queue {
  constructor(...args) {
    this._head = 0;
    this._tail = 0;
    for (const arg of args) {
      this.enQueue(arg);
    }
  }
  get head() {
    return this._head;
  }
  get tail() {
    return this._tail;
  }
  get size() {
    return this._tail - this._head;
  }
  [Symbol.iterator]() {
    return new IteratorLinkedQueue(this);
  }
  enQueue(value) {
    this[`_${this._tail}`] = value;
    this._tail++;
    return this.size;
  }
  deQueue() {
    const deleteItem = this[`_${this._head}`];
    delete this[`_${this._head}`];
    this._head++;
    return deleteItem;
  }
  peek() {
    return this[`_${this._head}`];
  }
  peekOll() {
    for (const iterator of this) {
      console.log(iterator);
    }
  }
}
function merger(queue1, queue2) {
  let newQueue = new Queue();
  while (queue1.size || queue2.size) {
    if (queue1.size) {
      newQueue.enQueue(queue1.deQueue());
    }
    if (queue2.size) {
      newQueue.enQueue(queue2.deQueue());
    }
  }
  return newQueue;
}

const queue = new Queue("jnj", "mkmd", "aaa", "786", 98);
console.log(queue);
console.log(queue.peekOll());
