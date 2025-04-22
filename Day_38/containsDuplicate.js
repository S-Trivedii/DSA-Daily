/*
Q. You are given an array of integers nums. Return true if any value appears at least twice, and false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false


*/

var containsDuplicate = function (nums) {
  const seen = new Set();

  for (let num of nums) {
    if (seen.has(num)) {
      return true; // Found a duplicate
    }
    seen.add(num);
  }

  return false; // No duplicates found
};
