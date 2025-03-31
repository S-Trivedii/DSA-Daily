/*
Q. Given an integer x, return true if x is a , and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

*/

// ----------Approach-----------------------

// 1. We can convert a number into string (using JSON.stringify(num) or num.toString or String(num)) and can check if the string is palindrome or not

// 2. Second method is givin below

const isPalindrome = function (x) {
  if (x < 0) return false;

  let original = x;
  let reverseNumber = 0;
  while (x > 0) {
    let digit = x % 10; // this will get you last digit
    reverseNumber = reverseNumber * 10 + digit;
    x = Math.floor(x / 10);
  }

  if (original === reverseNumber) return true;
  else return false;
};
