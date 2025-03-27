// Q. Given a sorted array arr[] and an integer x, find the index (0-based) of the largest element in arr[] that is less than or equal to x. This element is called the floor of x. If such an element does not exist, return -1.

// Note: In case of multiple occurrences of ceil of x, return the index of the last occurrence.

// Examples

// Input: arr[] = [1, 2, 8, 10, 10, 12, 19], x = 5
// Output: 1
// Explanation: Largest number less than or equal to 5 is 2, whose index is 1.

// Input: arr[] = [1, 2, 8, 10, 10, 12, 19], x = 11
// Output: 4
// Explanation: Largest Number less than or equal to 11 is 10, whose indices are 3 and 4. The index of last occurrence is 4.

// Input: arr[] = [1, 2, 8, 10, 10, 12, 19], x = 0
// Output: -1
// Explanation: No element less than or equal to 0 is found. So, output is -1.

// -------------Approach------------------------------------
/*
When ever an array or string is sorted, first thing must comes into your mind is Binary Search.
The below code uses the binary search approach, just slight alteration in code. 
T.C - log(n) 
S.C - O(1)
*/

const findFloor = (arr, x) => {
  let i = 0,
    j = arr.length - 1;
  let ans = -1;
  while (i <= j) {
    let mid = Math.floor((i + j) / 2);

    if (arr[mid] === x) {
      ans = mid;
      i = mid + 1;
    } else if (arr[mid] > x) {
      j = mid - 1;
    } else {
      ans = mid;
      i = mid + 1;
    }
  }

  return ans;
};
