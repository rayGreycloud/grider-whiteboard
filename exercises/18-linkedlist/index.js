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
  
  size() {
    let counter = 0;
    let currentNode = this.head;    
    
    while (currentNode) {
      counter++;
      currentNode = currentNode.next;  
    }
    
    return counter;
  }
  
  getFirst() {  
    return this.head;
  }
  
  getLast() { 
    if (!this.head) {
      return null;
    }
    
    let currentNode = this.head;
      
    while (currentNode) {
      if (!currentNode.next) {
        return currentNode;
      }
      currentNode = currentNode.next;  
    }
  }
  
  clear() {
    this.head = null;
  }
  
  removeFirst() {
    if (!this.head) { return; }
    
    this.head = this.head.next;
  }
  
}

module.exports = { Node, LinkedList };
