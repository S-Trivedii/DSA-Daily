// Q. Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

// For example:

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// ...

// Example 1:
// Input: columnNumber = 1
// Output: "A"

// Example 2:
// Input: columnNumber = 28
// Output: "AB"

// Example 3:
// Input: columnNumber = 701
// Output: "ZY"

// --------------Approach-------------------------------

/*
This problem is about converting a column number into an Excel-style column title (like A, B, C, ..., Z, AA, AB, ...).

1. Understanding the Pattern
Excel columns follow a base-26 number system, similar to how decimal (base-10) or binary (base-2) works. However, instead of digits 0-9, we use letters A-Z (1-26).

1 → A, 2 → B, ..., 26 → Z
27 → AA, 28 → AB, ..., 52 → AZ
701 → ZY, 702 → ZZ, 703 → AAA, etc.

2. Key Observations:
The rightmost letter changes the fastest, similar to how units place changes in decimal numbers.
Every 26th number resets and affects the next significant letter.

3. The mathematical relation:
Each letter corresponds to columnNumber % 26 (to get the last letter).
Since indexing starts from 1 (not 0 like normal bases), we adjust by subtracting 1 before using modulus.

Then, we divide the number by 26 to move to the next letter.

Example 1:
Input: columnNumber = 1
1 → "A"
Output: "A"

Example 2:
Input: columnNumber = 28
28 - 1 = 27, 27 % 26 = 1 → "B"

28 / 26 = 1 → "A"
Output: "AB"

Example 3:

Input: columnNumber = 701
701 - 1 = 700, 700 % 26 = 25 → "Y"

701 / 26 = 26, 26 - 1 = 25, 25 % 26 = 25 → "Z"
Output: "ZY"

*/
const convertToTitle = function (columnNumber) {
  let result = "";

  while (columnNumber > 0) {
    columnNumber--; // Adjust for 1-based indexing
    let remainder = columnNumber % 26;
    result = String.fromCharCode(65 + remainder) + result; // 65 = 'A'
    columnNumber = Math.floor(columnNumber / 26);
  }

  return result;
};
