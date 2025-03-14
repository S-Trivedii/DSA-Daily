// Q. Find the second largest element in array, if doesn't exist return -1. .Solve this question without sorting.

// TC - O(n), SC- O(1)

function secondLargest(arr) {
  // edge case
  if (arr.length < 2) return -1;

  let first = -Infinity,
    second = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] < first) {
      second = arr[i];
    }
  }

  return second === -Infinity ? -1 : second;
}

secondLargest([12, 35, 1, 10, 34, 1]); // 34
secondLargest([10, 5, 10]); // 5
secondLargest([10, 10, 10]); // -1
