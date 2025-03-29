// Q.There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

// Example 2:
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

// Example 3:
// Input: nums = [1], target = 0
// Output: -1

// -------------Approach-----------------------

/*
1. Check if the array is rotated

If nums[0] < nums[nums.length - 1], then the array is not rotated (sorted normally).
In this case, simply apply binary search on the entire array.

2. If the array is rotated, find the pivot index

The pivot is the index of the smallest element, which is also the point where the rotation occurs.
This can be found using a modified binary search.

3. Apply binary search on both parts:

The array is now split into two sorted subarrays:
Left subarray (nums[0] to nums[pivot - 1])
Right subarray (nums[pivot] to nums[nums.length - 1])
Determine in which part the target lies and perform binary search accordingly.

*/

// Best approach

const search1 = function (nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid; // Found target

    // Identify which half is sorted
    if (nums[left] <= nums[mid]) {
      // Left half is sorted
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1; // Search left half
      } else {
        left = mid + 1; // Search right half
      }
    } else {
      // Right half is sorted
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1; // Search right half
      } else {
        right = mid - 1; // Search left half
      }
    }
  }

  return -1; // Target not found
};

// My solution

const search2 = function (nums, target) {
  if (nums.length === 1) return nums[0] === target ? 0 : -1;

  function binarySearch(nums, target, left, right) {
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) return mid;
      else if (nums[mid] > target) right = mid - 1;
      else left = mid + 1;
    }
    return -1;
  }

  // Finding the pivot (smallest element index)
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[right]) left = mid + 1;
    else right = mid;
  }

  let pivot = left;

  // Search in the two halves
  let result1 = binarySearch(nums, target, 0, pivot - 1);
  if (result1 !== -1) return result1;
  return binarySearch(nums, target, pivot, nums.length - 1);
};
