// Q. Given an array arr[] containing integers and an integer k, your task is to find the length of the longest subarray where the sum of its elements is equal to the given value k. If there is no subarray with sum equal to k, return 0.

// Gfg - Medium - https://www.geeksforgeeks.org/problems/longest-sub-array-with-sum-k0809/1

// Examples:

// Input: arr[] = [10, 5, 2, 7, 1, -10], k = 15
// Output: 6
// Explanation: Subarrays with sum = 15 are [5, 2, 7, 1], [10, 5] and [10, 5, 2, 7, 1, -10]. The length of the longest subarray with a sum of 15 is 6.

// -------------Approach --------------------------

/*
Sliding window won't work, since it contains -ve value.

1. Same brute force appraoch as previous question
2. Using Hashmap/map - TC-O(n) | SC-O(n)
*/

// Very good question, DO IT AGAIN
function longestSubArrWithSumK(nums, k) {
  let prefixSum = 0;
  let maxLen = 0;
  const prefixMap = new Map();

  for (let j = 0; j < nums.length; j++) {
    prefixSum += nums[j];

    // If prefixSum == k, update maxLen
    if (prefixSum === k) {
      maxLen = j + 1;
    }

    // If (prefixSum - k) exists in the map, update maxLen
    if (prefixMap.has(prefixSum - k)) {
      maxLen = Math.max(maxLen, j - prefixMap.get(prefixSum - k));
    }

    // Store the first occurrence of prefixSum
    if (!prefixMap.has(prefixSum)) {
      prefixMap.set(prefixSum, j);
    }
  }

  return maxLen;
}

console.log(longestSubArrWithSumK([1, -1, 5, -2, 3], 3)); // 3 -> [5, -2]
