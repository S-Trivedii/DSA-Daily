// Q. Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.

// 8. Leetcode - Medium

// The algorithm for myAtoi(string s) is as follows:

// Whitespace: Ignore any leading whitespace (" ").
// Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity if neither present.
// Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
// Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
// Return the integer as the final result.

// Example 1:
// Input: s = "42"
// Output: 42

// Explanation:
// The underlined characters are what is read in and the caret is the current reader position.
// Step 1: "42" (no characters read because there is no leading whitespace)
//          ^
// Step 2: "42" (no characters read because there is neither a '-' nor '+')
//          ^
// Step 3: "42" ("42" is read in)
//            ^

// Example 2:
// Input: s = " -042"
// Output: -42

// Explanation:
// Step 1: "   -042" (leading whitespace is read and ignored)
//             ^
// Step 2: "   -042" ('-' is read, so the result should be negative)
//              ^
// Step 3: "   -042" ("042" is read in, leading zeros ignored in the result)
//                ^

// Example 3:
// Input: s = "1337c0d3"
// Output: 1337

// Explanation:
// Step 1: "1337c0d3" (no characters read because there is no leading whitespace)
//          ^
// Step 2: "1337c0d3" (no characters read because there is neither a '-' nor '+')
//          ^
// Step 3: "1337c0d3" ("1337" is read in; reading stops because the next character is a non-digit)
//              ^

// Example 4:
// Input: s = "0-1"
// Output: 0

// Explanation:
// Step 1: "0-1" (no characters read because there is no leading whitespace)
//          ^
// Step 2: "0-1" (no characters read because there is neither a '-' nor '+')
//          ^
// Step 3: "0-1" ("0" is read in; reading stops because the next character is a non-digit)
//           ^

// Example 5:
// Input: s = "words and 987"
// Output: 0

//-------------Approach-----------------------

/*
 
*/

// TC- O(n)
// SC-O(n)

const myAtoi = function (s) {
  // Step 1: Remove the whitespace if any
  let str = s.trim();
  if (str.length === 0) return 0; // no digit - return 0

  // Step 2: Check sign
  let i = 0;
  sign = 1;
  if (str[i] === "-") {
    sign = -1;
    i++;
  } else if (str[i] === "+") {
    // what if + is present, you have to move 'i' by 1
    i++;
  }

  // Step 3: Check leading zeros and other symbols or characters
  // i. what if instead of zero, a character is there like - a, z, b, A, B etc
  // ii. what if special symbols is there like @, -, !, etc
  // iii. what if 0 is there.
  // Ans: if any thing appear after zero instead of number, stop the loop.

  let num = 0;
  while (i < str.length && str[i] >= "0" && str[i] <= "9") {
    // this will convert characters (which look like digit '5') into number. (Check conversion below)
    num = num * 10 + (str[i] - "0");
    i++;
  }

  // Step 4: Apply sign
  num *= sign;

  // Step 5: Check the number within 32-bit signed integer range
  const INT_MIN = -(2 ** 31);
  const INT_MAX = 2 ** 31 - 1;

  if (num < INT_MIN) return INT_MIN;
  if (num > INT_MAX) return INT_MAX;

  return num;
};

myAtoi("42"); // 42
myAtoi("  -0423"); // 423
myAtoi("1337c0d3"); // 1337
myAtoi("0-1"); // 0  special character after zero
myAtoi("words and 987"); // 0

// Conversion of characters (digit like '3', '7', '0') into digit

/*
In JavaScript, characters like '0', '1', ..., '9' are stored as their ASCII values:

'0' → ASCII 48

'1' → ASCII 49

'2' → ASCII 50

'9' → ASCII 57

To convert a character into its actual numeric value, we subtract '0' (ASCII 48):
Example: 
'5' - '0'  // 53 - 48 = 5  --> Converting '5' to 5
'9' - '0'  // 57 - 48 = 9  --> Converting '9' to 9

*/
