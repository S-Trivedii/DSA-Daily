/*
Q. Write a function that takes a string and returns the same string with the first letter of each word capitalized.

Example:
Input: "hello world"  
Output: "Hello World"


Input: "javascript is fun"  
Output: "Javascript Is Fun"

*/

function capitalizeWords(str) {
  const words = str.split(" ");

  // Capitalize the first letter of each word
  const capitalized = words.map((word) => {
    if (word.length === 0) return ""; // handle empty strings
    return word[0].toUpperCase() + word.slice(1);
  });

  return capitalized.join(" ");
}
