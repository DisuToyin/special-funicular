// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

const runningSum = (arr) => {
  let newArr = [];
  if (arr.length === 1) return newArr.push(arr[0]);

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      newArr.push(arr[0]);
    } else {
      newArr.push(arr[i] + newArr[i - 1]);
    }
  }
  return newArr;
};

console.log(runningSum([1, 1, 1, 1, 1]));
