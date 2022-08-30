// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The test cases are generated so that the answer will be less than or equal to 2 * 109.

const gridTraveller = (m, n) => {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  return gridTraveller(m - 1, n) + gridTraveller(m, n - 1);
};

// same problem but using memoization
const uniquePaths = (m, n, memo = {}) => {
  let key = m + "," + n;
  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  memo[key] = uniquePaths(m - 1, n, memo) + uniquePaths(m, n - 1, memo);
  return memo[key];
};

console.log(uniquePaths(3, 3));
