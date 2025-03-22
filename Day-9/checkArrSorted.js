// Q. Given an array, check if it is sorted in non-decreasing order (each element is greater than or equal to the previous one).

// Input: nums = [1, 2, 2, 3, 4]
// Output: true

// Input: nums = [1, 3, 2, 4]
// Output: false

function isSorted(nums) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      return false;
    }
  }
  return true;
}

isSorted([1, 2, 2, 3, 4]); // true
isSorted([1, 3, 2, 4]); //  false
