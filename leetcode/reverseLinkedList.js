// Given the head of a singly linked list, reverse the list, and return the reversed list.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const w = new Node(-1);
const x = new Node(2);
const y = new Node(3);

w.next = x;
x.next = y;

const printLinkedList = (head) => {
  let current = head;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
};

const reverseLinkedList = (head) => {
  let previous = null;
  let current = head;
  let next = null;

  while (current !== null) {
    //save the next
    next = current.next;
    // reverse
    current.next = previous;
    //advancing
    previous = current;
    current = next;
  }

  //   printLinkedList(previous);

  return previous;
};

console.log(reverseLinkedList(w));
