class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);

a.next = b;
b.next = c;
c.next = d;

// A -> B -> C -> D -> null

// const printLinkedList = (head) => {
//     let current = head
//     while( current !== null ){
//         console.log(current.val)
//         current = current.next
//     }
// }

//recursively
const printLinkedList = (head) => {
  if (head === null) return;

  console.log(head.val);

  printLinkedList(head.next);
};

// console.log(printLinkedList(a))

// const sumLinkedList = (head) => {
//     let current = head;
//     let sum = 0;

//     while(current !== null){
//         sum+=current.val
//         console.log(sum)
//         current  = current.next
//     }

//     return sum
// }

//recursively

const sumList = (head, sum) => {
  if (head == null) return 0;

  return head.val + sumList(head.next);
};

// console.log(sumList(a))

const findNode = (head, target) => {
  let current = head;

  while (current !== null) {
    if (current.val === target) {
      return true;
    }
    console.log(current.val);
    current = current.next;
  }
  return false;
};

const findNodeRecursively = (head, target) => {
  if (head === null) return false;
  if (head.val === target) return true;

  return findNodeRecursively(head.next, target);
};
console.log(findNodeRecursively(a, 1));

var reverseList = function (head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};
