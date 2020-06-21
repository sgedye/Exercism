export class LinkedList {

  push(val) {
    const node = { value: val, next: null }
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }
    console.log(node)
  }

  pop() {
    
  }

  shift() {

  }

  unshift() {

  }

  delete() {

  }

  count() {

  }
}
