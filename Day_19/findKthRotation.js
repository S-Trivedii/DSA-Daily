/*
Q. Given an increasing sorted rotated array arr of distinct integers. The array is right-rotated k times. Find the value of k.
Let's suppose we have an array arr = [2, 4, 6, 9], so if we rotate it by 2 times so that it will look like this:
After 1st Rotation : [9, 2, 4, 6]
After 2nd Rotation : [6, 9, 2, 4]

Examples:

Input: arr = [5, 1, 2, 3, 4]
Output: 1
Explanation: The given array is 5 1 2 3 4. The original sorted array is 1 2 3 4 5. We can see that the array was rotated 1 times to the right.

Input: arr = [1, 2, 3, 4, 5]
Output: 0
Explanation: The given array is not rotated.

Expected Time Complexity: O(log(n))
Expected Auxiliary Space: O(1)

*/

// Best approach using log(n) time complexity
/*
 -------To be continued....------------

*/

// Using O(n) time complextiy.
function findKRotation(arr) {
  if (arr.length === 1) return 0;

  let count = 0;
  let i = 0,
    j = 1;

  if (arr.length > 1 && arr[i] > arr[j]) return 1;

  while (j < arr.length) {
    if (arr[i] < arr[j]) {
      count++;
      i++;
      j++;
    } else if (arr[i] > arr[j]) {
      break;
    }
  }

  if (count + 1 === arr.length) return 0;

  return count ? count + 1 : 0;
}
