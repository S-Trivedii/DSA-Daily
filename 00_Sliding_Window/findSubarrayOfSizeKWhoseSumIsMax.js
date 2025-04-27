/*
Q. Find subarray of size k whose sum is maxium.

For example:
Input: arr = [1, 2, 3, 4, 5, 6],  k = 3
Output: 15
Explanation: [4, 5, 6] is the subarray of size k = 3 whose sum is maximum i.e. 15


*/

// --------------Approach--------------------

/*

⚡ When to Think About Sliding Window:
If the question talks about subarray or substring + array/string given → Sliding Window technique might be the right choice.


*/

// Window size is given i.e. k. It is a fixed size window
// Time Complexity is O(n)

function subarryOfSizeKWhoseSumIsMax(arr, k) {
  let i = 0,
    j = 0;
  let sum = 0;
  let maxi = -Infinity;

  while (j < arr.length) {
    // window size is less than k
    if (j - i + 1 < k) {
      sum = sum + arr[j];
      j++;
    } else if (j - i + 1 === k) {
      sum = sum + arr[j];
      maxi = Math.max(maxi, sum);
      j++;
      sum = sum - arr[i];
      i++;
    }
  }

  return maxi;
}

console.log(subarryOfSizeKWhoseSumIsMax([1, 2, 3, 4, 5, 6], 3));
