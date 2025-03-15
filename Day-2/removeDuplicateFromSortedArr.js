// 26. Remove Duplicates from Sorted Array - Easy (LeetCode)

// ---------Approach---------------

// Two pointers i and j. i is at 0th poisiton and j is at 1st position
// If we have 2 same element arr[i] === arr[j], just move j (i will remain at the same position)
// If we find unique element, arr[i] !== arr[j], first move i by 1 (i++) and then overwrite the value i.e.
// arr[i] = arr[j]

// LEARNING: HOW TO POINTERS BEHAVE IN CASE OF UNIQUE AND DUPLICATE ELEMENT

function removeDuplicateFromSortedArr() {
  if (nums.length === 0) return 0; // Edge case: empty array

  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j]; // 'Overwrite' with the new unique element
    }
  }

  return i + 1;
}

removeDuplicateFromSortedArr([1, 1, 2]); // 2, nums = [1,2,_]
removeDuplicateFromSortedArr([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]); // 5, nums = [0,1,2,3,4,_,_,_,_,_]

// Note: You can't use Set or Map, 'cause you need to remove duplicate from 'in-place'. Set and Map won't modify or remove the duplicate from original array.
