// Given the root of an n-ary tree, return the preorder traversal of its nodes' values.

// Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.children = [b, c, d];
b.children = [e, f];

const preorder = (root) => {
  if (!root) return null;
  const stack = [root];
  const preOrderArr = [];

  while (stack.length > 0) {
    const node = stack.pop();
    preOrderArr.push(node.data);

    if (node.children.length > 0) {
      for (let i = node.children.length - 1; i >= 0; i--) {
        stack.push(node.children[i]);
      }
    }
  }
  return preOrderArr;
};

console.log(preorder(a));
