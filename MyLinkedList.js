class MyLinkedList {
  constructor(value, next, index) {
    this.value = value;
    this.next = next;
    this.index = index;
  }
  get(index) {
    if (index === this.index) {
      return this.value;
    }
  }
}
