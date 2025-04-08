/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2

*/

// 1. First Approach - Using Map
// T.C - O(n) | S.C - O(n)

var majorityElement = function (nums) {
  let majority = nums.length / 2;

  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let key = nums[i];
    if (map.has(key)) {
      map.set(key, map.get(key) + 1);
    } else {
      map.set(key, 1);
    }
  }

  for (const [key, value] of map) {
    if (value > majority) {
      return key;
    }
  }
};

// 2. Approach - Using Boyer Moore Voting Algorithm

function majorityElement2(nums) {
  let count = 0,
    candidate = null;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }

    if (num === candidate) {
      count += 1;
    } else {
      count -= 1;
    }
  }

  return candidate;
}
