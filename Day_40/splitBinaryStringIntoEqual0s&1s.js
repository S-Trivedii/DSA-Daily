/*
Q. Given a binary string s, return the maximum number of substrings you can split into such that each substring has an equal number of 0s and 1s. If it's not possible, return -1.

Example:
Input: "0100110101"
Output: 4
Explanation: "01", "0011", "01", "01" are valid splits.

*/


// Why 010011 is not in the answer ?  Because there will only be two answer possible, one is 010011, 01 and 01

function maximumSubString(str) {
    let count0 = 0;
    let count1 = 0;

    let maxi = 0;

    for(let i = 0; i<str.length; i++) {
        if (str[i] === '0') {
            count0++;
        } else if (str[i] === '1') {
            count1++;
        } 
        
        // adding another condition becoz what if the string is empty ''
        if (count0 === count1 && count0 !== 0) {
            maxi++;
            count0 = 0;
            count1 = 0;
        }
    }

    return maxi === 0 ? -1 : maxi;
}

