/*
------------ Boyer Moore Voting Algorithm ----------------

This algorithm is used for finding the majority element in an array. 

Q. What is a majority element ?
If the length of an array is 'n' then the majority element is one which appear more than n / 2 times

For example: [1, 2, 2, 2, 1]
The majority element is 2 which appear more than n / 2 times

*/

// How does boyer moore voting algorithm works ?

/*
Step 1: Initialize
 - Set count = 0
 - Set candidate = null

Step 2: Traverse the array
 - For each element num in the array:

 1. If count === 0:
     - Set candidate = num
 
 2. If num === candidate:
     - Increment count by 1

 3. Else:
     - Decrement count by 1

Step 3: Return the candidate
     - After the loop ends, candidate will be the majority element.

*/

// Q. Find the majority element
const nums = [2, 2, 1, 1, 2];

function majority(nums) {
  let count = 0,
    candidate = null;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }

    if (count === num) {
      count += 1;
    } else {
      count -= 1;
    }
  }

  return candidate;
}
