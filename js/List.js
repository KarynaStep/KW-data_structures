class IteratorLinkedList {
  constructor(list) {
    this.list = list;
    this.currentItem = null;
  }
  next() {
    this.currentItem =
      this.currentItem === null ? this.list.head : this.currentItem.next;
    return {
      value: this.currentItem ? this.currentItem : undefined,
      done: this.currentItem === null,
    };
  }
}

class ListItem {
  //user
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
  get data() {
    return this._data;
  }
  set data(data) {
    this._data = data;
  }
  get next() {
    return this._next;
  }
  set next(next) {
    this._next = next;
  }
  get prev() {
    return this._next;
  }
  set prev(prev) {
    this._prev = prev;
  }
}

class LinkedList {
  constructor(...args) {
    // 1,2,3
    this.length = 0;
    this.head = null;
    this.tail = null;
    for (const arg of args) {
      this.push(arg);
    }
  }
  [Symbol.iterator]() {
    return new IteratorLinkedList(this);
  }
  push(arg) {
    const item = new ListItem(arg);
    if (this.length === 0) {
      this.head = item;
      this.tail = item;
    } else {
      item.prev = this.tail; //за ким Вася  - Коля
      this.tail.next = item; // Коля - Вася
      this.tail = item; //хвіст - Вася
    }
    return ++this.length;
  }
  shift() {
    if (this.length === 0) {
      return;
    }
    if (this.length === 1) {
      const val = this.head.data;
      this.head = null;
      this.tail = null;
      this.prev = null;
      this.length--;
      return val;
    }
    const headVal = this.head.data;
    const newHead = this.head.next;
    newHead.prev = null;
    this.head = newHead;
    this.length--;
    return headVal;
  }
  pop() {
    if (this.length === 0) {
      return;
    }
    if (this.length === 1) {
      const val = this.head.data;
      this.head = null;
      this.tail = null;
      this.prev = null;
      this.length--;
      return val;
    }
    const tailVal = this.tail.data;
    const newTail = this.searchPrev(tailVal);
    newTail.next = null;
    this.tail = newTail;
    this.length--;
    return tailVal;
  }

  delete(item) {
    if (this.length === 0) {
      return;
    }
    if (item === this.head.data) {
      this.shift();
      return "item delete " + item;
    }
    if (item === this.tail.data) {
      this.pop();
      return "item delete " + item;
    }
    if (this.search(item) === null) {
      return null;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.data === item) {
        current.prev = current.prev.prev;
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }

    this.length--;
    return item;
  }

  addAfter(after, item) {
    const foundPrev = this.search(after);
    const foundNext = this.searchNext(after);

    if (!foundPrev) {
      return null;
    }
    if (after === this.tail) {
      this.push(item);
      return;
    }
    if (after === this.head) {
      this.unshift(item);
      return;
    }

    const arg = new ListItem(item, foundPrev.next, foundNext.prev);
    foundPrev.next = arg;
    foundNext.prev = arg;
    this.length++;
    return this;
  }
  unshift(item) {
    if (this.length === 0) {
      const newItem = new ListItem(item);
      this.head = newItem;
      this.tail = newItem;
    } else {
      const oldHead = this.head;
      const arg = new ListItem(item, oldHead, null);
      oldHead.prev = arg;
      this.head = arg;
    }
    ++this.length;
    return this;
  }
  search(key) {
    for (const item of this) {
      if (item.data === key) {
        return item;
      }
    }
    return null;
  }
  searchPrev(key) {
    const val = this.search(key);
    for (const item of this) {
      if (item.next === val) {
        return item;
      }
    }
    return null;
  }
  searchNext(key) {
    const val = this.search(key);
    for (const item of this) {
      if (item.prev === val) {
        return item;
      }
    }
    return null;
  }
  logDataLinkedList() {
    for (const item of this) {
      console.log(item.data);
    }
  }
}

// const list = new LinkedList(1, [10, 20], { prop: "qwe" }, 87, "asd");
// // const list = new LinkedList();
// // const list2 = new LinkedList(1);
// console.log(list.logDataLinkedList());
// console.log(list.delete(87));
// console.log(list.logDataLinkedList());
// // console.log(list);

// console.log(list);
// // console.log(list.delete(98));
// // console.log(list.logDataLinkedList());
// // console.log(list.addAfter(7, 'njjh'));
// // // console.log(list.delete(87))
// // console.log(list.logDataLinkedList());
// console.log(list.unshift(09));
// console.log(list);

// console.log(list.searchPrev(87));
// console.log(list.searchNext(87));
// console.log(list.addAfter(87, 'pink'));
// console.log(list.searchNext(87));
// console.log(list.delete(87))
// console.log(list);

// console.log(list.logDataLinkedList());
// console.log(list);
// console.log(list.shift());
// console.log(list.pop());
// console.log(list.delete(null));
// console.log(list);

// console.log(list);
// console.log(list.search(1));
// console.log(list.logDataLinkedList()) ;
