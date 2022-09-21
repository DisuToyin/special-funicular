// Given an array of positive numbers and a positive number ‘S’, find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0, if no such subarray exists.

// Example 1:

// Input: [2, 1, 5, 2, 3, 2], S=7
// Output: 2
// Explanation: The smallest subarray with a sum great than or equal to '7' is [5, 2].

const smallestSubArray = (arr, S) => {
  let start = 0;
  windowSum = 0;
  smallestLength = Infinity;

  for (let end = 0; end < arr.length; end++) {
    windowSum += arr[end];

    //shrink window as small as possible to ensure provided window sum is still greater
    while (windowSum >= S) {
      smallestLength = Math.min(smallestLength, end - start + 1);
      windowSum -= arr[start];
      start += 1;
    }
  }
  if (smallestLength === Infinity) return 0;

  return smallestLength;
};

console.log(smallestSubArray([2, 1, 5, 2, 8], 7));

// Time Complexity #
// The time complexity of the above algorithm will be O(N)O(N). The outer for loop runs for all elements and the inner while loop processes each element only once, therefore the time complexity of the algorithm will be O(N+N)O(N+N) which is asymptotically equivalent to O(N)O(N).

// Space Complexity #
// The algorithm runs in constant space O(1)O(1).
