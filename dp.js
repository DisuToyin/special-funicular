function fib(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

const gridTraveler = (n, m) => {
  // if(m n === 0) return 0
  if (m == 1 && n == 1) return 1;
};

// using memoization to improve its time complexity

const gt = (m, n, memo = {}) => {
  let key = m + "," + n;
  if (key in memo) {
    return memo[key];
  }
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  memo[key] = gt(m - 1, n, memo) + gt(m, n - 1, memo);
  return memo[key];
};

console.log(gt(40, 50));
