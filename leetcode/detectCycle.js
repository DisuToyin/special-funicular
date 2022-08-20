// Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.
// Do not modify the linked list.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// a linked list with cycle
const a = new Node(-1);
const b = new Node(-7);
const c = new Node(7);
const d = new Node(-4);
const e = new Node(19);
const f = new Node(6);
const g = new Node(-9);
const h = new Node(-5);
const i = new Node(-2);
const j = new Node(-5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;
h.next = i;
i.next = j;
j.next = g;

// floyd's algorithm
var detectCycle = function (head) {
  if (head === null) return null;
  if (head.next === null) return null;
  let slow = head;
  let fast = head;
  let pointer = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next; // move the fast pointer 2times
    if (slow === fast) break;
  }

  if (fast !== slow) return null;

  while (pointer !== fast) {
    console.log({ pointer: pointer.val, fast: fast.val });
    pointer = pointer.next;
    fast = fast.next;
  }
  return fast;
};

console.log(detectCycle(a));
