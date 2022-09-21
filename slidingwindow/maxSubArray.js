// Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any contiguous subarray of size ‘k’.

// Input: [2, 1, 5, 1, 3, 2], k=3
// Output: 9
// Explanation: Subarray with maximum sum is [5, 1, 3].

const maxSubArray = (k, arr) => {
  let maxSum = 0.0;
  windowStart = 0;
  windowSum = 0;

  for (let i = 0; i < arr.length; i++) {
    windowSum += arr[i];
    console.log({ windowSum });
    if (i + 1 >= k) {
      maxSum = Math.max(maxSum, windowSum);
      console.log({ maxSum });
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }
  return maxSum;
};

console.log(maxSubArray(3, [2, 1, 5, 1, 3, 2]));
