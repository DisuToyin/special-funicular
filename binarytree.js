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

const depthFirstValues = (root) => {
  if (root === null) return [];
  let result = [];
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.data);

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return result;
};

// console.log(depthFirstValues(a));

//recursively
const depthFirstValuesRe = (root) => {
  if (root === null) return [];
  const leftValues = depthFirstValuesRe(root.left);
  const rightValues = depthFirstValuesRe(root.right);

  return [root.val, ...leftValues, ...rightValues];
};
