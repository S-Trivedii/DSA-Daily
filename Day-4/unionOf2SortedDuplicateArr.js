// Q. Given two sorted arrays a[] and b[], where each array may contain duplicate elements , the task is to return the elements in the union of the two arrays in sorted order.

// Medium - Gfg

// Union of two arrays can be defined as the set containing distinct common elements that are present in either of the arrays.
// Examples:

// Input: a[] = [1, 2, 3, 4, 5], b[] = [1, 2, 3, 6, 7]
// Output: 1 2 3 4 5 6 7

//-------------First Approach-------------------
/*
Using 'Set'

Use 'Set' on array - a
Use 'Set' on array - b

Merge the two array using a new array, but this will take extra space. So we can merge array 'b' into array 'a' or vice-versa.

Then again use Set on this resultant array. 
And you have your answer

First appraoch -> T.C.- O(n+m) | S.C.- O(n+m) for using Set

*/

// ----------- Second Approach -----------------
/*
Second approach is somewhat familiar with first apprach. Instead of Set use Map
*/

// ----------- Third Approach -----------------
/*
Using two-pointers(if they are sorted) -> T.C-O(n+m) | S.C.-O(n+m) only for storing answer
*/

// NOTE: This approach only works if both the array are 'SORTED'
function unionOf2SortedDuplicateArr(a, b) {
  let i = 0,
    j = 0;
  let result = [];

  while (i < a.length && j < b.length) {
    // Avoid duplicates in the result
    if (a[i] < b[j]) {
      if (result.length === 0 || result[result.length - 1] !== a[i]) {
        result.push(a[i]);
      }
      i++;
    } else if (a[i] > b[j]) {
      if (result.length === 0 || result[result.length - 1] !== b[j]) {
        result.push(b[j]);
      }
      j++;
    } else {
      // a[i] === b[j]
      if (result.length === 0 || result[result.length - 1] !== a[i]) {
        result.push(a[i]);
      }
      i++;
      j++;
    }
  }

  // Add remaining elements of arr1
  while (i < a.length) {
    if (result.length === 0 || result[result.length - 1] !== a[i]) {
      result.push(a[i]);
    }
    i++;
  }

  // Add remaining elements of arr2
  while (j < b.length) {
    if (result.length === 0 || result[result.length - 1] !== b[j]) {
      result.push(b[j]);
    }
    j++;
  }

  return result;
}

console.log(unionOf2SortedDuplicateArr([1, 2, 3, 4, 5], [1, 2, 3, 6, 7])); // Output: [1, 2, 3, 4, 5, 6, 7]
console.log(unionOf2SortedDuplicateArr([2, 2, 3, 4, 5], [1, 1, 2, 3, 4])); // Output: [1, 2, 3, 4, 5]
console.log(unionOf2SortedDuplicateArr([1, 1, 1, 1, 1], [2, 2, 2, 2, 2])); // Output: [1, 2]
