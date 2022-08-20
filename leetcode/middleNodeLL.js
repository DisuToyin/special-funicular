// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("Disu");
const b = new Node("Toyin");
const c = new Node("Tobi");
const d = new Node("Marvin");
const e = new Node("Isaac");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const s = new Node("Twitter");
const t = new Node("Reddit");
const u = new Node("Instagram");
const v = new Node("Koo");
const w = new Node("LinkedIn");
const x = new Node("Facebook");

s.next = t;
t.next = u;
u.next = v;
v.next = w;
w.next = x;

const getMiddle = (head) => {
  let current = head;
  let listCount = 0;
  let middle = 0;
  while (current != null) {
    current = current.next;
    listCount++;
  }
  middle = Math.round(listCount / 2);

  if (listCount % 2 === 0) {
    return middle + 1;
  }

  return middle;
};

const middleNode = (head) => {
  let middle = getMiddle(head);
  let current = head;

  let k = 1;
  while (k <= middle) {
    console.log({ k, middle });
    if (k === middle) return current;
    current = current.next;
    k++;
  }

  return 0;
};

console.log(middleNode(s));
