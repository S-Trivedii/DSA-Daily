/*
Q. Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

 

Example 1:
Input: s = "the sky is blue"
Output: "blue is sky the"

Example 2:
Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.

Example 3:
Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
 

Constraints:

1 <= s.length <= 104
s contains English letters (upper-case and lower-case), digits, and spaces ' '.
There is at least one word in s.
 

Follow-up: If the string data type is mutable in your language, can you solve it in-place with O(1) extra space?

*/

// ---------------Approach----------------------

// Solution 1: Using JS in-built methods and extra space.

const reverseWords = (s) => {
  // the sky is blue

  const arrOfStr = s.trim().split(" ");

  // Filtering or removing empty space from arrOfStr
  const filterArrOfString = arrOfStr.filter((str) => str.trim() !== "");

  let i = 0,
    j = filterArrOfString.length - 1;
  while (i <= j) {
    let a = filterArrOfString[i];
    filterArrOfString[i] = filterArrOfString[j];
    filterArrOfString[j] = a;

    i++;
    j--;
  }

  return filterArrOfString.join(" ");
};

// NOTE: In JS strings are immutable which means you can't modifie it

// Let's do it without using inbuilt method and without using extra space

function reverseWords(s) {
  let result = "";
  let i = s.length - 1;

  while (i >= 0) {
    // Skip trailing spaces
    while (i >= 0 && s[i] === " ") i--;

    if (i < 0) break;

    let j = i;

    // Find the beginning of the word
    while (j >= 0 && s[j] !== " ") j--;

    // Extract the word
    let word = s.slice(j + 1, i + 1);

    // Add to result
    if (result.length > 0) result += " ";
    result += word;

    i = j - 1;
  }

  return result;
}

console.log(reverseWords("the sky is    blue     "));
