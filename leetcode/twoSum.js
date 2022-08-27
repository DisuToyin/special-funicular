// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

//terrible time complexity
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      let val = nums[i] + nums[j];
      console.log({ nums: nums[i], nums2: nums[j] });
      if (val === target) {
        return [i, j];
      }
    }
  }
};

// using hashMap

const twoSumHashMap = (nums, target) => {
  let hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    hashMap[nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    let resultVal = target - nums[i];
    if (hashMap[resultVal] !== i && hashMap[resultVal] !== undefined) {
      return [i, hashMap[resultVal]];
    }
  }
};
console.log(twoSumHashMap([3, 3], 6));
// Runtime: 75 ms, faster than 92.19% of JavaScript online submissions for Two Sum.
