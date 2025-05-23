/*
Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:

Input: nums = [1,1,1], k = 2
Output: 2
Example 2:

Input: nums = [1,2,3], k = 3
Output: 2
 

Constraints:

1 <= nums.length <= 2 * 104
-1000 <= nums[i] <= 1000
-107 <= k <= 107

*/

var subarraySum = function (nums, k) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    if (nums[i] === k) {
      total++;
    }
    sum = sum + nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      sum = sum + nums[j];
      if (sum === k) {
        total++;
      }
    }
  }

  return total;
};
