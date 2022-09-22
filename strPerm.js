// Permutation in a String (hard) #
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

const perm = (s, p) => {
  let map = {};
  start = 0;
  end = 0;
  matches = 0;

  for (let i = 0; i < p.length; i++) {
    if (p[i] in map) {
      map[p[i]]++;
    } else {
      map[p[i]] = 1;
    }
  }

  for (end; end < s.length; end++) {
    if (s[end] in map) {
      map[s[end]]--;
      if (map[s[end]] === 0) matches += 1;
      console.log({ matchFound: s[end] });
    }

    if (matches === Object.keys(map).length) return true;

    if (end + 1 >= p.length) {
      if (s[start] in map) {
        if (map[s[start]] === 0) matches -= 1;
        map[s[start]]++;
      }

      start += 1;
    }
  }

  return false;
};

console.log(perm("aaacbacarb", "abc"));

// pseudocode
