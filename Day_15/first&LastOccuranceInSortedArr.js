// Q. Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// LeetCode - Medium - 34

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Example 2:
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// Example 3:
// Input: nums = [], target = 0
// Output: [-1,-1]

const searchRange = (nums, target) => {
  function findFirst(nums, target) {
    let i = 0,
      j = nums.length - 1,
      first = -1;
    while (i <= j) {
      let mid = Math.floor((i + j) / 2);
      if (nums[mid] === target) {
        first = mid;
        j = mid - 1; // Move left to find the first occurrence
      } else if (nums[mid] < target) {
        i = mid + 1;
      } else {
        j = mid - 1;
      }
    }
    return first;
  }

  function findLast(nums, target) {
    let i = 0,
      j = nums.length - 1,
      last = -1;
    while (i <= j) {
      let mid = Math.floor((i + j) / 2);
      if (nums[mid] === target) {
        last = mid;
        i = mid + 1; // Move right to find the last occurrence
      } else if (nums[mid] < target) {
        i = mid + 1;
      } else {
        j = mid - 1;
      }
    }
    return last;
  }

  let first = findFirst(nums, target);
  let last = findLast(nums, target);

  return [first, last];
};
