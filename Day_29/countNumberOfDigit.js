// Q. Write a function that counts digits, uppercase, lowercase, and special characters in a string using ASCII.

// ----------ASCII Table ----------------------

/*
Character	ASCII Code
'0'–'9'	    48–57
'A'–'Z'	    65–90
'a'–'z'	    97–122

Outside the above range are special characters

*/

function countCharacterTypes(str) {
  let digits = 0,
    upper = 0,
    lower = 0,
    special = 0;

  for (let char of str) {
    // The .charCodeAt(index) method returns the ASCII (or Unicode) numeric value of the character at the specified index in a string.
    let code = char.charCodeAt(0);
    if (code >= 48 && code <= 57) digits++;
    else if (code >= 65 && code <= 90) upper++;
    else if (code >= 97 && code <= 122) lower++;
    else special++;
  }

  return { digits, upper, lower, special };
}

// Example
console.log(countCharacterTypes("Hello@123"));
// { digits: 3, upper: 1, lower: 4, special: 1 }
