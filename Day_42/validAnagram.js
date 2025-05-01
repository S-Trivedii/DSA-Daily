/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Anagram -> An anagram is a word or phrase formed by rearranging the letters of a 
different word or phrase, using all the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

*/

// ------------- Solution ---------------------

/* 
1. Using sorting

Sort two string, if both are equal means they are anagram. This algorithm 
will take O(n log n) time complexity.

*/

// 2. Fequency array - Most efficient - Time Complexity - O(n)

function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const count = Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - 97]++;
    count[t.charCodeAt(i) - 97]--;
  }

  return count.every((val) => val === 0);
}

// 3. My solution

/* 
O(n) — looping through both strings once
+ O(k) — looping through map1 entries to compare with map2 
(k is the number of unique characters)

→ So total time complexity = O(n + k)

*/

var isAnagram = function (s, t) {
  const map1 = new Map();
  const map2 = new Map();

  for (let i = 0; i < s.length; i++) {
    let key = s[i];

    if (map1.has(key)) {
      map1.set(key, map1.get(key) + 1);
    } else {
      map1.set(key, 1);
    }
  }

  for (let j = 0; j < t.length; j++) {
    let key = t[j];

    if (map2.has(key)) {
      map2.set(key, map2.get(key) + 1);
    } else {
      map2.set(key, 1);
    }
  }

  if (map1.size !== map2.size) {
    return false;
  }

  // checking key and frequency of two Map()
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) {
      return false;
    }
  }

  return true;
};
