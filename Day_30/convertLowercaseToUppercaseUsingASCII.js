// Q. Write a function that converts a lowercase string to uppercase without using .toUpperCase().

function toUpperCaseAscii(str) {
  let result = "";
  for (let char of str) {
    let code = char.charCodeAt(0);
    if (code >= 97 && code <= 122) {
      result += String.fromCharCode(code - 32);
    } else {
      result += char;
    }
  }
  return result;
}

// Example
console.log(toUpperCaseAscii("hello")); // HELLO
