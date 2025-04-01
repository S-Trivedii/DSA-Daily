/*
Q. Given a positive integer n, find the square root of n. If n is not a perfect square, then return the floor value.

Floor value of any number is the greatest Integer which is less than or equal to that number

Examples:

Input: n = 4
Output: 2
Explanation: Since, 4 is a perfect square, so its square root is 2.

Input: n = 11
Output: 3
Explanation: Since, 11 is not a perfect square, floor of square root of 11 is 3.

Input: n = 1
Output: 1

*/

// -------------Approach------------------------

// 1. Using brute force, do square of each number from 1 to n. The square of number n will be between 1 to n.

// 2. Using binary search, log(n) time complexity.

/*
Since I have to find the square root of n, the square root is definetly between 1 to n. For example: 
if n is 9 the square root of 9 lies between 1 to 9.

1, 2, 3, 4, 5, 6, 7, 8, 9 

apply binary search here and it is much easier to find square root of n.
*/

function sqRoot(n) {
  let i = 1,
    j = n;
  let ans;

  while (i <= j) {
    let mid = Math.floor((i + j) / 2);

    if (mid * mid === n) {
      return mid;
    } else if (mid * mid > n) {
      j = mid - 1;
    } else {
      ans = mid;
      i = mid + 1;
    }
  }

  return ans;
}
