/*
Q. First negative number in every subarray of size k. If number doesn't exist return 0

For example:
Input: arr = [12, -1, -7, 8, -15, 30, 16, 28],   k = 3
Output: [-1, -1, -7, -15, -15, 0]
Explanation: 
The first -ve number in subarray [12, -1, -7] is -1
The first -ve number in subarray [-1 -7, 8] is -1
The first -ve number in subarray [-7, 8, -15] is -7
The first -ve number in subarray [8, -15, 30] is -15
The first -ve number in subarray [-15, 30, 16] is -15
There is no negative number in subarray [30, 16, 28], so 0

*/

// ---------- Approach -----------------

// Using sliding window technique. Fixed size window of size k

function firstNegativeNumInSubarrayOfSizeK(arr, k) {
  let i = 0,
    j = 0;
  let result = [];
  let negatives = []; // to store negative numbers in current window

  while (j < arr.length) {
    // If current element is negative, add to negatives
    if (arr[j] < 0) {
      negatives.push(arr[j]);
    }

    // If window size < k, just move j forward
    if (j - i + 1 < k) {
      j++;
    }
    // When window size becomes k
    else if (j - i + 1 === k) {
      if (negatives.length === 0) {
        result.push(0);
      } else {
        result.push(negatives[0]);
      }

      // Before sliding the window, check if arr[i] was negative
      if (arr[i] === negatives[0]) {
        negatives.shift(); // remove it from queue
      }

      i++;
      j++;
    }
  }

  return result;
}

console.log(
  firstNegativeNumInSubarrayOfSizeK([12, -1, -7, 8, -15, 30, 16, 28], 3)
);
