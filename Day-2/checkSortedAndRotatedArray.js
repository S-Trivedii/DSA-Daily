// 1752. Check if Array Is Sorted and Rotated
// Q. Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.

// There may be duplicates in the original array.
// Note: An array A rotated by x positions results in an array B of the same length such that B[i] == A[(i+x) % A.length] for every valid index i

// ---------APPROACH-----------

// Array is in non-decreasing order(ascending), so even if it was rotated there must be atmost one drop. What does I mean by drop ? Consider an array :-

// arr = [3, 4, 5, 1, 2]
// if an element (i) is greater than the just next element (i + 1), then it means there is a drop. For example,  5 > 1, this is a drop.

// Lets consider another array -> arr = [2,1,3,4]
// there is only one drop i.e. 2 > 1. Then why ans is false ? Because we haven't considered who is the just next element for the last element ?
// For last element in array, the just next element is arr[0]. (Because array might be rotated)
// So for arr = [2,1,3,4] we have two drop -> 2 > 1 and 4 > 2

// if (nums[i] > nums[(i + 1) % nums.length]) {
//     countDrop++;
// }

// The above code check total drop present in an array.

// T.C - O(n) | S.C - O(1)

function checkSortedAndRotated(nums) {
  if (nums.length <= 2) return true;

  // TC-O(n) | SC-O(1)

  let countDrop = 0;
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] > nums[(i + 1) % n]) {
      countDrop++;
    }

    if (countDrop > 1) {
      return false;
    }
  }

  return true;
}

checkSortedAndRotated([3, 4, 5, 1, 2]); // true
checkSortedAndRotated([2, 1, 3, 4]); // false

// NOTE: You can never rotate a sorted non-decreasing array and get a strictly decreasing array like [4, 3, 2, 1].
