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
  
  removeLast() {
    if (!this.head) { return; }
    
    if (!this.head.next) {
      this.head = null;
      return;
    }    
    
    let previous = this.head;
    let node = this.head.next;

    while (node.next) {
      previous = node;
      node = node.next;
    } 
    previous.next = null;
  }
  
  insertLast(data) {
    const lastNode = this.getLast();
    
    if (lastNode) {
      lastNode.next = new Node(data);
    } else {
      this.insertFirst(data);
    }
  }
  
  getAt(index) {
    let counter = 0;
    let node = this.head
    while (node) {
      if (counter === index) {
        return node;
      }
      
      counter++;
      node = node.next;
    }
    return null;
  }
  
  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    
    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    // previous.next = current 
    previous.next = previous.next.next;    
    
  }
  
  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    
    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;  
  } 
  
  forEach(fn) {
    let node = this.head;
    let index = 0;
    while (node) {
      fn(node, index);
      node = node.next;
      index++;
    }
  }
}

module.exports = { Node, LinkedList };
