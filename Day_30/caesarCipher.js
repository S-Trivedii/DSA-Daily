/* 
Q: Implement a Caesar cipher that shifts each character by +1 using ASCII.

Example:

Input: "abc" 
Output: "bcd" 

Input: "xyz"
Output: "yza"

*/

function shiftByOne(str) {
  let result = "";
  for (let char of str) {
    let code = char.charCodeAt(0);
    if (code >= 97 && code <= 122) {
      result += String.fromCharCode(((code - 97 + 1) % 26) + 97);
    } else if (code >= 65 && code <= 90) {
      result += String.fromCharCode(((code - 65 + 1) % 26) + 65);
    } else {
      result += char;
    }
  }
  return result;
}

// Example
console.log(shiftByOne("abcXYZ")); // bcdYZA
