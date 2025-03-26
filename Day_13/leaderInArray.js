/*
GFG - Easy 
Q. You are given an array arr of positive integers. Your task is to find all the leaders in the array. An element is considered a leader if it is greater than or equal to all elements to its right. The rightmost element is always a leader.

Examples:

Input: arr = [16, 17, 4, 3, 5, 2]
Output: [17, 5, 2]
Explanation: Note that there is nothing greater on the right side of 17, 5 and, 2.

Input: arr = [10, 4, 2, 4, 1]
Output: [10, 4, 4, 1]
Explanation: Note that both of the 4s are in output, as to be a leader an equal element is also allowed on the right. side

Input: arr = [5, 10, 20, 40]
Output: [40]
Explanation: When an array is sorted in increasing order, only the rightmost element is leader.

Input: arr = [30, 10, 10, 5]
Output: [30, 10, 10, 5]
Explanation: When an array is sorted in non-increasing order, all elements are leaders.
*/

// ----------------Approach -------------------
/*
1. Brute force - Using two loops | T.C. - O(n^2) | S.C - O(1) (extra space for returning the ans is not considered)
2. Best approach - See the code below. T.C - O(n) | S.C - O(1)
*/

//-------------------

// Best approach
/*
Run loop from the opposite side and check for each element wheather it is greater than or equal to maxi:
  if yes, update the maxi with this number and push this number to ans array
  if no, continue running the loop


NOTE: Right most element of array will always be a leader element   
*/

const leaders = (a) => {
  const ans = []; // extra space for storing ans

  let maxi = a[a.length - 1];
  for (let i = a.length - 1; i >= 0; i--) {
    if (i === a.length - 1) {
      ans.push(a[i]);
    } else {
      if (a[i] >= maxi) {
        maxi = a[i];
        ans.push(a[i]);
      } else {
        continue;
      }
    }
  }

  return ans.reverse();
};
