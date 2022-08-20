// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

const printLinkedList = (head) => {
  let current = head;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
};
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// l1;
const a = new Node(1);
const b = new Node(4);

a.next = b;

// l2;
const w = new Node(-1);
const x = new Node(2);
const y = new Node(3);

w.next = x;
x.next = y;

const mergeSortedLinkedList = (l1, l2) => {
  let current = new Node();
  let dummy = current;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }
  if (l1) current.next = l1;
  if (l2) current.next = l2;
  printLinkedList(dummy.next);
  return dummy.next;
};

console.log(mergeSortedLinkedList(a, w));
