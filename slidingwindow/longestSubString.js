// Given a string, find the length of the longest substring in it with no more than K distinct characters.

// Example 1:

// Input: String="araaci", K=2
// Output: 4
// Explanation: The longest substring with no more than '2' distinct characters is "araa".

const longestDistinctSubString = (s, k) => {
  let distinctChar = {};
  windowStart = 0;

  for (let end = 0; end < s.length; end++) {
    if (!(s[end] in distinctChar)) {
      distinctChar[s[end]] = 1;
    } else {
      distinctChar[s[end]]++;
    }
    while (Object.keys(distinctChar).length > k) {}
  }
};

console.log(longestDistinctSubString("araaci", 2));
