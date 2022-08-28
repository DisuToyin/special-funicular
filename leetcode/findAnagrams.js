// Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".

const findAnagram = (s, p) => {
  var res = [],
    left = 0,
    right = 0,
    count = p.length,
    map = {};

  for (let i = 0; i < p.length; i++) {
    map[p[i]] ? map[p[i]]++ : (map[p[i]] = 1);
  }

  while (right < s.length) {
    if (map[s[right++]]-- >= 1) count--;
    if (count == 0) res.push(left);
    if (right - left == p.length && map[s[left++]]++ >= 0) count++;
  }

  return res;
};

console.log(findAnagram("cbaebabacd", "abc"));
