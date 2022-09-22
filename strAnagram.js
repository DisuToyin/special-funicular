// Given a string and a pattern, find all anagrams of the pattern in the given string.

// Anagram is actually a Permutation of a string. For example, “abc” has the following six anagrams:

// abc
// acb
// bac
// bca
// cab
// cba
// Write a function to return a list of starting indices of the anagrams of the pattern in the given string.

// Example 1:

// Input: String="ppqp", Pattern="pq"
// Output: [1, 2]
// Explanation: The two anagrams of the pattern in the given string are "pq" and "qp".
// Example 2:

// Input: String="abbcabc", Pattern="abc"
// Output: [2, 3, 4]
// Explanation: The three anagrams of the pattern in the given string are "bca", "cab", and "abc".

const strAnagram = (s, p) => {
  let freqMap = {};
  start = 0;
  end = 0;
  output = [];
  matches = 0;

  for (let i = 0; i < p.length; i++) {
    if (p[i] in freqMap) {
      freqMap[p[i]]++;
    } else {
      freqMap[p[i]] = 1;
    }
  }

  for (end; end < s.length; end++) {
    let addToWindow = s[end];
    if (addToWindow in freqMap) {
      freqMap[addToWindow]--;
      if (freqMap[addToWindow] === 0) matches += 1;
    }

    if (matches === Object.keys(freqMap).length) output.push(start);

    if (end + 1 >= p.length) {
      let leaveWindow = s[start];
      if (leaveWindow in freqMap) {
        if (freqMap[leaveWindow] === 0) matches -= 1;
        freqMap[leaveWindow]++;
      }
      start += 1;
    }
  }

  return output;
};

console.log(strAnagram("abbcabc", "abc"));
