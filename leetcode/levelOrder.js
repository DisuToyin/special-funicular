// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(3);
const b = new Node(9);
const c = new Node(20);
const d = new Node(15);
const e = new Node(7);

a.left = b;
a.right = c;
c.right = d;
c.left = e;

// levelOrder is also breadthFirst

const levelOrder = (root) => {
  if (!root) return [];
  return helper([[root]], 0);
};

var helper = function (res, level) {
  var now = res[level];
  var next = [];

  for (var i = 0; i < now.length; i++) {
    if (now[i].left) next.push(now[i].left);
    if (now[i].right) next.push(now[i].right);
    now[i] = now[i].val;
  }

  if (next.length) {
    res.push(next);
    helper(res, level + 1);
  }

  return res;
};
console.log(levelOrder(a));
