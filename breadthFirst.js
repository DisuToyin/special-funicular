class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.right = d;
b.left = e;
c.right = f;

const breadthFirst = (root) => {
  if (!root) return [];
  let values = [];
  let queue = [root];

  while (queue.length > 0) {
    let current = queue.shift();
    values.push(current.val);

    if (current.right) values.push(current.right);
    if (current.left) values.push(current.left);
  }
  return values;
};

console.log(breadthFirst(a));
