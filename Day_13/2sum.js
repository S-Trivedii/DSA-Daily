// Q. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Leetcode - Easy - 1

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// --------Approach ---------------------
/*
Brute force - Use two loop. See the code below | T.C - O(n^2) | S.C - O(1)
Optimise code - Using extra space. See the code below | T.C - O(n) | S.C - O(n) 
*/

// Brute force
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

// --------------

// Optimise Approach

function twoSum() {
  let obj = new Map(); // Learn more about Map from below

  for (let i = 0; i < nums.length; i++) {
    // i need to find the compliment
    let compliment = target - nums[i];

    /*
     Check if compliment exist in Map:
      - if yes, return its index and,
      - if no, insert the number in Map
    */

    // compliment doesn't exist, push/set number with its index
    if (obj.get(compliment) === undefined) {
      obj.set(nums[i], i); // {2, 0}
    } else {
      // compliment exist, return the number index
      let idx = obj.get(compliment);
      return [i, idx];
    }
  }
}

// Maps in Javascript

// 1. Creating a Map
let obj = new Map();

// 2. How to push/set/insert value in a Map
obj.set("name", "John");
obj.set("age", 25);
obj.set("city", "New York");
// console.log(obj); // Map(3) { 'name' => 'John', 'age' => 25, 'city' => 'New York' }

// 3. Getting the value of a key from Map
// NOTE: If key doesn't exist it will return undefined. See below
console.log(obj.get("city")); // "New York"
console.log(obj.get("country")); // undefined (if key doesn't exist)

// 4. Checking if a key exists, will return a boolean value
console.log(obj.has("name")); // true
console.log(obj.has("country")); // false
