/*
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
You must solve this problem without using the library's sort function.

 

Example 1:
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

Example 2:
Input: nums = [2,0,1]
Output: [0,1,2]

*/

// ------------- Approach ---------------------

// 1. First approach

/* 
1. Time complexity is O(n) 

Counting frequencies → You loop through the array once → O(n)
Reconstructing the array → At most you loop through the array again → O(n)

So total = O(n) + O(n) = O(n)

2. Space complexity is O(1). Why ?
Even if i am using Map(), it is only storing three variable 0, 1, and 2. So it doesn't grow with n.

*/
var sortColors = function (nums) {
  const obj = new Map();

  // Step 1: Count occurrences of 0, 1, 2
  for (let i = 0; i < nums.length; i++) {
    if (obj.has(nums[i])) {
      obj.set(nums[i], obj.get(nums[i]) + 1);
    } else {
      obj.set(nums[i], 1);
    }
  }

  // Step 2: Rebuild nums in-place in order 0s, 1s, 2s
  let index = 0;

  for (let color of [0, 1, 2]) {
    let count = obj.get(color) || 0;
    for (let i = 0; i < count; i++) {
      nums[index++] = color;
    }
  }

  console.log(nums); // [0, 0, 1, 1, 2, 2]
};

sortColors([2, 0, 2, 1, 1, 0]);

// Second Approach - Above approach is little bit complicated, so instead of using Map(), I am going to count all three variable

function sortColors2(nums) {
  let zero = 0,
    ones = 0,
    twos = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) zero++;
    else if (nums[i] === 1) ones++;
    else twos++;
  }

  for (let i = 1; i <= zero; i++) {
    nums[i] = 0;
  }

  for (let i = zero + 1; i <= ones; i++) {
    nums[i] = 1;
  }

  for (let i = ones + 1; i <= twos; i++) {
    nums[i] = 2;
  }

  console.log(nums);
}

sortColors2([2, 0, 2, 1, 1, 0]); // No extra space

// Third Approach - Dutch National Flag Algorithm - T.C - O(n) && S.C - O(1)

const dutchNationalFlagAlgo = (nums) => {
  let low = 0,
    mid = 0,
    high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      // swap mid with low and increase mid and low by 1 each
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      mid++;
      low++;
    } else if (nums[mid] === 1) {
      mid++;
    } else if (nums[mid] === 2) {
      // swap mid with high and decrease high by 1
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
};

dutchNationalFlagAlgo([2, 0, 2, 1, 1, 0]);

/*
 When to use dutch national flag algorithm

  - You have an array with only 3 distinct elements
  - You want to sort them in-place
  - You want an efficient solution: O(n) time and O(1) space
*/
