// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next || null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  
  insertFirst(data) {
    this.head = new Node(data, this.head);    
  }
  
}

module.exports = { Node, LinkedList };
