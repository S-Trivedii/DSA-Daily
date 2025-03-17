// Q. Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

// 136. LeetCode - Easy

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

// -------------Approach------------

/*
There are various ways to solve this question:
1. xor - only approach which uses n time and constant space
2. map - it is the only way to remember which element appear how many times. Time and space are linear i.e. O(n)
3. sorting - first sort the array and do linear search - time taken is nlogn and space is constant
*/

// -------------XOR-------------------
/*
Some rules of xor operator
1. a^a = 0 e.g. 2^2 = 0
2. a^0 = a e.g. 3^0 = 3
3. (a ^ b ^ c) == (b ^ a ^ c) == (c ^ b ^ a)
*/

function singleNumber(nums) {
  let ans = 0;

  for (let num of nums) {
    ans ^= num;
  }

  return ans;
}

singleNumber([2, 2, 1]); // 1
singleNumber([4, 1, 2, 1, 2]); // 4
