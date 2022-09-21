// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]

//dynamic programming tabulation

const pascalTriangle = (numRows) => {
  let result = [[1]];

  for (let i = 0; i <= result.length; i++) {
    console.log(result[i]);
    for (let j = 0; j <= result[i].length; j++) {
      console.log(result[i][j]);
    }
  }
  return result;
};

console.log(pascalTriangle(5));
