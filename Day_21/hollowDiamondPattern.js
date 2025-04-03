/*
Q. Write a function that prints the following hollow diamond pattern for a given n (odd number).

   *   
  * *  
 *   * 
*     *
 *   * 
  * *  
   *   

*/

function hollowDiamond(n) {
  if (n % 2 === 0) {
    console.log("Please enter an odd number.");
    return;
  }

  let mid = Math.floor(n / 2);

  for (let i = 0; i < n; i++) {
    let spaces = Math.abs(mid - i);
    let stars = n - 2 * spaces;
    let row = " ".repeat(spaces);

    if (stars === 1) {
      row += "*";
    } else {
      row += "*" + " ".repeat(stars - 2) + "*";
    }

    console.log(row);
  }
}

hollowDiamond(7);
