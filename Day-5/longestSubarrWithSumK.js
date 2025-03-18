// Q. Find the longest subarry from array nums whose sum is equal to k.

// Note: The nums array cannot contains the negative value

// ------------Approach-----------------

/*
1. Use brute force - T.C - O(n^2) | S.C- O(1)

2. Use 'Sliding window',  but only works with positive array (including zero). Won't work with -ve elements. T.C - O(n) | S.C - O(1) 
*/

// The purpose of sliding window is that 'sum of the window [i, j] is always or equal to the k'.

function longestSubArrWithSumK(nums, k) {
  let i = 0,
    j = 0;
  let sum = 0,
    maxi = 0;

  while (j < nums.length) {
    sum = sum + nums[j];

    // decrese the size of window if sum is greater than k
    while (sum > k) {
      sum = sum - nums[i];
      i++;
    }

    if (sum === k) {
      maxi = Math.max(maxi, j - i + 1);
    }

    // increse the size of window if sum < k
    j++;
  }

  return maxi;
}

longestSubArrWithSumK([9, 3, 2, 7, 1, 5, 4], 9); //  2 -> [2, 7]
