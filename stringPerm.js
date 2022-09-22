// Given a string and a pattern, find out if the string contains any permutation of the pattern.

// Permutation is defined as the re-arranging of the characters of the string. For example, “abc” has the following six permutations:

// abc
// acb
// bac
// bca
// cab
// cba
// If a string has ‘n’ distinct characters it will have n!n! permutations.

// Example 1:

// Input: String="oidbcaf", Pattern="abc"
// Output: true
// Explanation: The string contains "bca" which is a permutation of the given pattern.
// Example 2:

// Input: String="odicf", Pattern="dc"
// Output: false
// Explanation: No permutation of the pattern is present in the given string as a substring.
// Example 3:

// Input: String="bcdxabcdy", Pattern="bcdyabcdx"
// Output: true
// Explanation: Both the string and the pattern are a permutation of each other.
// Example 4:

// Input: String="aaacb", Pattern="abc"
// Output: true
// Explanation: The string contains "acb" which is a permutation of the given pattern.

const stringPermutation = (s, p) => {
  let pl = p.length;
  start = 0;
  end = 0;
  matched = 0;
  patternMap = {};

  for (let i = 0; i < pl; i++) {
    if (!(p[i] in patternMap)) {
      patternMap[p[i]] = 1;
    } else {
      patternMap[p[i]]++;
    }
  }

  for (end; end < s.length; end++) {
    if (s[end] in patternMap) {
      patternMap[s[end]] -= 1;
      if (patternMap[s[end]] === 0) matched += 1;
    }

    if (matched === Object.keys(patternMap).length) {
      return true;
    }

    if (end + 1 >= pl) {
      if (s[start] in patternMap) {
        if (patternMap[s[start]] === 0) matched -= 1;

        patternMap[s[start]]++;
      }
      start += 1;
    }
  }

  return false;
};

console.log(stringPermutation("oidbcaf", "abc"));
