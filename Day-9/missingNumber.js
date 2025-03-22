// Q. Given an array of integers where 1 ≤ nums[i] ≤ n (n = array size), find all the numbers from 1 to n that do not appear in the array.

// Input: nums = [4, 3, 2, 7, 8, 2, 3, 1]
// Output: [5, 6]

// Input: nums = [1, 1]
// Output: [2]

function findDisappearedNumbers(nums) {
  let missingNumbers = new Array(nums.length).fill(0);

  for (let num of nums) {
    missingNumbers[num - 1] = 1;
  }

  let result = [];
  for (let i = 0; i < missingNumbers.length; i++) {
    if (missingNumbers[i] === 0) {
      result.push(i + 1);
    }
  }

  return result;
}

findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]); //  [5, 6]
findDisappearedNumbers([1, 1]); // [2]
findDisappearedNumbers([2, 2, 3, 3, 5, 5]); // [1, 4, 6]
