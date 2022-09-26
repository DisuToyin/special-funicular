// Given a string, find the length of the longest substring which has no repeating characters.

// Example 1:

// Input: String="aabccbb"
// Output: 3
// Explanation: The longest substring without any repeating characters is "abc".
// Example 2:

// Input: String="abbbb"
// Output: 2
// Explanation: The longest substring without any repeating characters is "ab".
// Example 3:

// Input: String="abccde"
// Output: 3
// Explanation: Longest substrings without any repeating characters are "abc" & "cde".

const longestNonRepeating = (s) => {
  let hashMap = {};
  maxLength = 0;
  start = 0;
  for (let end = 0; end < s.length; end++) {
    let rightChar = s[end];
    if (rightChar in hashMap) {
      start = Math.max(start, hashMap[rightChar] + 1);
    }

    hashMap[rightChar] = end;
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
};

console.log(longestNonRepeating("abccde"));
