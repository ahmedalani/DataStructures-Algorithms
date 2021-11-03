const hasCycle = (head) => {
  let fast = head;
  let slow = head;
  
  while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next
      
      if (fast === slow) {
          return slow;
      }
  }
  return null
}
var detectCycle = function(head) {
  if (!head || !head.next) {
      return null
  }
  let intersect = hasCycle(head);
  if (!intersect) {
      return null;
  }
  
  let start = head
  while (intersect !== start) {
      start = start.next;
      intersect = intersect.next;
  }
  
  return start;
  
};