function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // If the target is not found, return the insertion position (left)
  return left;
}

searchInsert([1, 3, 5, 6], 5); // 2
searchInsert([1, 3, 5, 6], 2); // 1
searchInsert([1, 3, 5, 6], 7); // 4
