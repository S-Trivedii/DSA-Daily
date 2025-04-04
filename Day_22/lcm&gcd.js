/*
Q. Given two integers a and b, the task is to compute their LCM and GCD and return an array containing their LCM and GCD.

Examples:

Input: a = 5 , b = 10
Output: [10, 5]
Explanation: LCM of 5 and 10 is 10, while their GCD is 5.

Input: a = 14 , b = 8
Output: [56, 2]
Explanation: LCM of 14 and 8 is 56, while their GCD is 2.

Input: a = 1 , b = 1
Output: [1, 1]
Explanation: LCM of 1 and 1 is 1, while their GCD is 1.

*/

// -----------Approach-----------------------

/*
GCD calculation: Use Euclidean Algorithm: 
    - gcd(a, b) = gcd(b, a % b)
    - Base case: gcd(a, 0) = a

 

LCM(a,b) = GCD(a,b) / ∣a×b∣
​
*/

function lcmAndGcd(a, b) {
  // Function to calculate GCD using Euclidean Algorithm
  const gcd = (x, y) => {
    while (y !== 0) {
      [x, y] = [y, x % y]; // Swap x with y and y with remainder
    }
    return x;
  };

  let GCD = gcd(a, b);
  let LCM = (a * b) / GCD; // Using the formula LCM * GCD = a * b

  return [LCM, GCD];
}
