/*
Given a lowercase string s, return a new string where characters at even indices (0, 2, 4, ...) are converted to uppercase, and characters at odd indices (1, 3, 5, ...) are converted to lowercase.

But there’s a twist: ignore spaces when deciding the index for uppercase/lowercase. Spaces should remain unchanged and not count in the index logic.

🧪 Example:
Input: "hello world"
Output: "HeLlO WoRlD"

NOTE: string won't be empty

*/

function waveFromString(s) {
  let newString = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      newString += " ";
    } else if (i % 2 === 0) {
      newString += s[i].toUpperCase();
    } else {
      newString += s[i].toLowerCase();
    }

    
  }

  return newString;
}



waveFromString("hello world");
