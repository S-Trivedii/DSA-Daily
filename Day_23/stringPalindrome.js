/*
Q. Write a function that checks if a given string is a palindrome. A palindrome is a word that reads the same forwards and backwards.

Example:

Input: "madam"  
Output: true


*/

function isPalindrome(str) {
  // Convert to lowercase to ignore case sensitivity
  const lowerStr = str.toLowerCase();

  let left = 0;
  let right = lowerStr.length - 1;

  while (left < right) {
    if (lowerStr[left] !== lowerStr[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}
