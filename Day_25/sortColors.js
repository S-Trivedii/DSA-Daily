/*
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
You must solve this problem without using the library's sort function.

 

Example 1:
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

Example 2:
Input: nums = [2,0,1]
Output: [0,1,2]

*/

// ------------- Approach ---------------------

// 1. First approach

var sortColors = function (nums) {
  const obj = new Map();

  // Step 1: Count occurrences of 0, 1, 2
  for (let i = 0; i < nums.length; i++) {
    if (obj.has(nums[i])) {
      obj.set(nums[i], obj.get(nums[i]) + 1);
    } else {
      obj.set(nums[i], 1); // start with 1, not 0
    }
  }

  // Step 2: Rebuild nums in-place in order 0s, 1s, 2s
  let index = 0;

  for (let color of [0, 1, 2]) {
    let count = obj.get(color) || 0;
    for (let i = 0; i < count; i++) {
      nums[index++] = color;
    }
  }
};
