/*
Q. Given an array of integers and a target value k, count the number of pairs (i, j) such that arr[i] + arr[j] == k and i < j.

🔸 Example:

Input: arr = [1, 5, 7, -1, 5], k = 6  
Output: 3

Explanation:
(1, 5), (7, -1), (1st 5, 2nd 5) there are two (1, 5) pairs

*/

function countPairs(arr, k) {
    let map = new Map();
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        let complement = k - arr[i];

        // If the complement is already in the map, we found a valid pair
        if (map.has(complement)) {
            count += map.get(complement);
        }

        // Update the map with current element
        map.set(arr[i], (map.get(arr[i]) || 0) + 1);
    }

    return count;
}

// Example:
const arr = [1, 5, 7, -1, 5];
const k = 6;

console.log(countPairs(arr, k)); // Output: 3
