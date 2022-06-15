// linked list: is a linear data structure, an orderd list of data where the elements or nodes are
// linked together using a pointer

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while(current.next) {
        current = current.next;
      }

      current.next = node;
    }
  
    this.size++;
  }
  // Insert at index
  insertAt(data, index) {
    if (index > 0 && index > this.size) {
      return;
    }

    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    const node = new Node(data);
    let previous;
    let current = this.head;
    let count = 0;

    while(count < index) {
      previous = current; // node before index
      count++;
      current = current.next; // node after index
    }

    node.next = current;
    previous.next = node;
    this.size++;
  }
  // Get at index
  getAt(index) {
    let current = this.head;
    let count = 0;

    while(current) {
      if (count === index) {
        return current.data;
      }
      count++;
      current = current.next;
    }

    return null;
  }
  // Remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.size--;
  }
  // clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }
  // Print list data
  printListData() {
    let current = this.head;

    while(current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();

ll.insertFirst(400);
ll.insertFirst(300);
ll.insertFirst(200);
ll.insertFirst(100);

ll.insertLast(500);

ll.insertAt(50, 1);
ll.insertAt(900, 2);
ll.insertAt(50000, 15);

ll.removeAt(2);

ll.printListData();




console.log('index at 5: ', ll.getAt(5));

