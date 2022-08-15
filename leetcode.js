var search = function (nums, target) {
  var start = 0;
  var end = nums.length - 1;
  var middle = Math.floor((start + end) / 2);

  while (start <= end) {
    if (nums[middle] === target) return middle;
    if (nums[middle] > target) {
      end = middle - 1;
    } else if (nums[middle] < target) {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  return -1;
};

var sortedSquares = function (nums) {
  let sqedArray = [];
  for (let i of nums) {
    sqedArray.push(i * i);
  }

  for (let i = 0; i < nums.length; i++) {}

  let sortedArray = [];
};

var rotate = function (nums, k) {
  var steps = 0;
  while (steps < k) {
    removed = nums.shift();
    nums.push(removed);
    steps++;
    console.log(steps);
  }
  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
