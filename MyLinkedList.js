/**
 * Initialize your data structure here.
 */
const Node = function (data) {
  this.data = data;
  this.next = null;
};
var MyLinkedList = function () {
  this.head = null;
  this.length = 0;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  // console.log("from Get index: ", this);
  if (index > this.length - 1) return -1; // >= becasue index is 0 based

  let node = this.head,
    i = 0;

  while (i < index) {
    i++;
    node = node.next;
  }

  return node.data;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const node = new Node(val);
  node.next = this.head;
  this.head = node;
  this.length++;
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const node = new Node(val);
  if (!this.head) {
    this.head = node;
    this.length++;
    return;
  }
  let lastNode = this.head;
  while (lastNode.next) {
    lastNode = lastNode.next;
  }
  lastNode.next = node;
  this.length++;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.length) return;

  const newNode = new Node(val);
  if (index === 0) {
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return;
  }

  if (index === this.length) {
    this.addAtTail(val);
    return;
  }

  let i = 0,
    node = this.head;

  while (i < index - 1) {
    node = node.next;
    i++;
  }
  newNode.next = node.next;
  node.next = newNode;

  this.length++;
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index > this.length - 1) return;
  if (index === 0) {
    this.head = this.head.next;
    this.length--;
    return;
  }

  let i = 0,
    node = this.head;
  while (i < index - 1) {
    node = node.next;
    i++;
  }
  node.next = node.next.next;
  this.length--;
};
