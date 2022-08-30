// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

const climbStairs = (n) => {
  if (n === 1 || n === 0) return 1;
  let first = 1;
  let second = 2;

  for (i = 3; i <= n; i++) {
    let third = first + second;
    first = second;
    second = third;
  }
  return second;
};

// recursion and memoization
const climbingStairs = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n === 1 || n === 0) return 1;
  // if (n === 2) return 2;
  if (n < 0) return 0;
  memo[n] = climbingStairs(n - 2, memo) + climbingStairs(n - 1, memo);
  return memo[n];
};

// Runtime: 62 ms, faster than 92.63% of JavaScript online submissions for Climbing Stairs.

console.log(climbingStairs(2));
