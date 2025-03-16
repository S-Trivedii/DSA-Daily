// Q. Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
// LeetCode - Medium - 189

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]

// ----------Understanding-----------

/*
Q. 1 what if k is greater than the length of array - k > nums.length 
For e.g.  [1,2,3,4,5,6,7], k = 9

Q. 2 What if k = 0

*/

// --------- Approach --------------

/*

A1. If the value of k is greater than the length of array. Then, calculate the actual value of k
     actualRotation = k % nums.lenth;  

     e.g. k = 9; [1,2,3,4,5,6,7]  --> 9 % 7 = 3
     3 is the actual rotation

A2. If the value of k is 0, this means no rotation is present. 

NOTE: Question doesn't said you need to modify the original array. So we can't return a new array. We need to modify the nums array itself

  We need to modify nums, can't return new array

*/

// TC-O(n) | SC-O(1)
function rotationByK(nums, k) {
  let n = nums.length;
  let actualK = k % n;

  if (actualK === 0) return; // not modifying the array, so not returning anything

  // 1. Reverse the entire array
  let i = 0,
    j = n - 1;
  while (i < j) {
    let a = nums[i];
    nums[i] = nums[j];
    nums[j] = a;
    i++;
    j--;
  }

  // After reversing the entire arr = [7, 6, 5, 4, 3, 2, 1]

  // 2. Reverse again, but this time only rotated element
  i = 0;
  j = actualK - 1;
  while (i < j) {
    let a = nums[i];
    nums[i] = nums[j];
    nums[j] = a;
    i++;
    j--;
  }

  // 3. Reverse the remaining element
  i = actualK;
  j = n - 1;
  while (i < j) {
    let a = nums[i];
    nums[i] = nums[j];
    nums[j] = a;
    i++;
    j--;
  }
}

rotationByK([1, 2, 3, 4, 5, 6, 7], 3); // [5,6,7,1,2,3,4]
rotationByK([-1, -100, 3, 99], 2); // [3,99,-1,-100]
