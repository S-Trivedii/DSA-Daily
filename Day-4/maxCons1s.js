// Q. Given a binary array nums, return the maximum number of consecutive 1's in the array.

// 485. LeetCode - Easy

// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2

// --------Approach -----------
/*
Very easy question, no need to use even brute force.
Create two pointers current and maxi. 'current pointer' tracks the current consecutive 1's and 'maxi pointer' track the maximum consecutive 1's.

Initally both,  current = 0 and maxi = 0

Run loop from 0 to arr.length;
if arr[i] === 1; increase current by 1 and calculate the max of both pointers - current and maxi and store into maxi pointer.

if arr[i] === 0; make current = 0 again;

TC-O(1) | SC-O(1)

*/

function maxCons1(arr) {
  let current = 0,
    maxi = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      current++;
      maxi = Math.max(maxi, current);
    } else {
      current = 0;
    }
  }
}

maxCons1([1, 1, 0, 1, 1, 1]); // 3
maxCons1([1, 0, 1, 1, 0, 1]); // 2
