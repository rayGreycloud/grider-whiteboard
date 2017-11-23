// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
  // initialize trackers to first node in list
  let slow = list.getFirst();
  let fast = list.getFirst();
  
  // check if next two nodes exist
  while (fast.next && fast.next.next) {
    // move slow one node
    slow = slow.next;
    // move fast two nodes
    fast = fast.next.next;
  }
  // when while loop completes, slow points at midpoint
  return slow;  
}

module.exports = midpoint;
