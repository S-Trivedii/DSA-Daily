/*
Q. Write a function that takes a string and returns the number of vowels in it.
Vowels are: 'a', 'e', 'i', 'o', 'u' (both uppercase and lowercase)

*/

// -----------Approach -----------------------

function countVowels(str) {
  const lowerStr = str.toLowerCase();

  const vowels = "aeiou";
  let count = 0;

  for (let char of lowerStr) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}
