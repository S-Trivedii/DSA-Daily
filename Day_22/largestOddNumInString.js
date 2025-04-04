/*
Q. You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.

A substring is a contiguous sequence of characters within a string.
 

Example 1:
Input: num = "52"
Output: "5"
Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.

Example 2:
Input: num = "4206"
Output: ""
Explanation: There are no odd numbers in "4206".

Example 3:
Input: num = "35427"
Output: "35427"
Explanation: "35427" is already an odd number.

*/

// T.C - O(n)

const largestOddNumber = function (num) {
  // Traverse the string from right to left. The first odd number encountere will be the biggest odd number. Example: "273182" --> From right to left first odd number is 1. So biggest odd number is 2731

  for (let i = num.length - 1; i >= 0; i--) {
    if (Number(num[i]) % 2 !== 0) {
      return num.substring(0, i + 1);
    }
  }

  return "";
};
