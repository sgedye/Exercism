export class LinkedList {

  constructor() {
    this.list = [];
  }

  push(value) {
    this.list.push(value);
  }

  pop() {
    if (this.list.length > 0) {
      return this.list.pop();
    }
  }

  shift() {
    if (this.list.length > 0) {
      return this.list.shift();
    }
  }

  unshift(value) {
    this.list.unshift(value);
  }

  delete(value) {
    let index = this.list.indexOf(value)
    if (index >= 0) {
      this.list.splice(index, 1)
    }
  }

  count() {
    return this.list.length;
  }
}
