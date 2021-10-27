const hasCycle = (head) => {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next

    if (fast === slow) {
      return true
    }
  }

  return false
}

// Input: head = [1]
// output: false

// Input: head = [1,2]
// output: true

// Input: head = [3,2,0,-4]
// output: true