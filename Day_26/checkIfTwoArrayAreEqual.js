/*
Q. Write a JavaScript function that checks if two arrays contain the same elements, regardless of order, and frequency must match.

Example 1:
arr1 = [1, 2, 2, 3]
arr2 = [3, 2, 2, 1]
Output: true

Example 2:
arr1 = [1, 2, 3]
arr2 = [1, 2, 2, 3]
Output: false (frequency mismatch)

*/

// -------- Approach ------------------

function arrAreEqual(arr1, arr2) {
  const map1 = new Map();

  for (let i = 0; i < arr1.length; i++) {
    let key = arr1[i];

    if (map1.has(key)) {
      map1.set(key, map1.get(key) + 1);
    } else {
      map1.set(key, 1);
    }
  }

  const map2 = new Map();

  for (let i = 0; i < arr2.length; i++) {
    let key = arr2[i];

    if (map2.has(key)) {
      map2.set(key, map2.get(key) + 1);
    } else {
      map2.set(key, 1);
    }
  }

  // Check if size are equal or not
  if (map1.size !== map2.size) {
    return false;
  }

  // Compare each key-value pair in map1 with map2
  for (let [key, value] of map1) {
    if (map2.get(key) !== value) {
      return false;
    }
  }

  return true;
}
