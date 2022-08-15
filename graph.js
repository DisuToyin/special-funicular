const depthFirstPrint = (graph, source) => {
  const stack = [source];

  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);

    for (let neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }
};

const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

// using recursion

const depthFirstTraversal = (graph, source) => {
  console.log(source);
  for (let neighbor of graph[source]) {
    depthFirstTraversal(graph, neighbor);
  }
};

// depthFirstPrint(graph, "a");

// depthFirstTraversal(graph, "a");

const breadthFirstPrint = (graph, source) => {
  const queue = [source];
  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current);
    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
};

// breadthFirstPrint(graph, "a");

// using depth first
const hasPath = (graph, src, dst) => {
  if (src === dst) {
    return true;
  }

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst) === true) {
      return true;
    }
  }

  return false;
};

// console.log(hasPath(graph, "e", "f"));

// using breadthfirst

const hasPathBF = (graph, src, dst) => {
  const queue = [src];

  while (queue.length > 0) {
    const current = queue.shift();
    if (current === dst) return true;
    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
  return false;
};

// undirected path
// convert the edge list to adjacency list
const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  return hasPathUG(graph, nodeA, nodeB, new Set());
};

// UG is undirected graph
const hasPathUG = (graph, src, dst, visited) => {
  if (src === dst) return true;
  if (visited.has(src)) return false;

  //used for undirected graph to avoid infinite loop
  visited.add(src);

  for (let neighbor of graph[src]) {
    if (hasPathUG(graph, neighbor, dst, visited) === true) {
      return true;
    }
  }
  return false;
};

const buildGraph = (edges) => {
  const graph = {};

  for (let edge of edges) {
    const [a, b] = edge;
    print;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];

    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};

const edges = [
  [i, j],
  [k, i],
  [m, k],
  [k, l],
  [o, n],
];
