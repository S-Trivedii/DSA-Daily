/*
Q. Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

LeetCode - 283 - Easy 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]

*/

// -------- Learning -------------------
/*
Not much to learn, just watch how two pointers works

i will remain at the same position unless if it is a non-zero number. Only j moves

*/

function moveZero(nums) {
  let i = 0,
    j = 1;

  if (nums[i] === 0 && nums[j] !== 0) {
    // Swap only when nums[i] is zero and nums[j] is non-zero
    [nums[i], nums[j]] = [nums[j], nums[i]];
    i++;
  } else if (nums[i] !== 0) {
    // Move i forward only if it's already a non-zero element
    i++;
  }
  j++; // Always move j forward
}

moveZero([0, 1, 0, 3, 12]); // [1,3,12,0,0]
moveZero([0]); // [0]
