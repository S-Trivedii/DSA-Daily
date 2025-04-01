/*
Q. You are given 2 numbers n and m, the task is to find n√m (nth root of m). If the root is not integer then returns -1.

Examples :

Input: n = 2, m = 9
Output: 3
Explanation: 32 = 9

Input: n = 3, m = 9
Output: -1
Explanation: 3rd root of 9 is not integer.

Input: n = 1, m = 14
Output: 14

*/

// Same approach as square Root of a number question
function nthRoot(n, m) {
  if (n === 1) return m;

  let i = 1,
    j = m;

  while (i <= j) {
    let mid = Math.floor((i + j) / 2);

    if (Math.pow(mid, n) === m) {
      return mid;
    } else if (Math.pow(mid, n) > m) {
      j = mid - 1;
    } else {
      i = mid + 1;
    }
  }

  return -1;
}
