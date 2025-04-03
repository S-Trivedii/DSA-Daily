/*
 Q. Write a JavaScript function to print the following pyramid pattern for a given number n
    *    
   ***   
  *****  
 ******* 
*********

*/

function pyramidPattern(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars + spaces);
  }
}

pyramidPattern(5);
