// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example 2:

// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.

const longestPalindrome = (s) => {
  let characters = {};
  for (let i = 0; i < s.length; i++) {
    if (!characters.hasOwnProperty(s[i])) {
      characters[s[i]] = 1;
    }
    characters[s[i]]++;
  }
  return characters;
};
console.log(longestPalindrome("abccccdd"));
