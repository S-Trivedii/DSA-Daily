/*
 Q. Write a function to check if a string has all unique characters using ASCII values. If yes, return true, else false


Example: 
Input: 'hello'
Output: false

Input: 'dog'
Outpu: true

*/

// ----------Approach---------------

/*

1. let seen = Array(26).fill(false);

- We're creating an array of 26 boolean values (one for each letter), all initially set to false.
- This array tracks whether we've already seen a character.

- Index 0 = 'a', Index 1 = 'b', ..., Index 25 = 'z'.


2. let index = char.charCodeAt(0) - "a".charCodeAt(0); 

- char.charCodeAt(0) gives the ASCII value of the character.
- 'a'.charCodeAt(0) is 97, 'b' is 98, ..., 'z' is 122.
- So this subtracts 97 from each char's ASCII code to get its 0–25 index.

For example: 'c'.charCodeAt(0) = 99 → 99 - 97 = 2, so index 2.
*/

function hasUniqueChars(str) {
  if (str.length > 26) return false; // only 26 lowercase letters
  let seen = Array(26).fill(false);

  for (let char of str) {
    let index = char.charCodeAt(0) - "a".charCodeAt(0);
    if (seen[index]) return false;
    seen[index] = true;
  }
  return true;
}
