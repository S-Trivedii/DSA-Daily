/*
Given an array of integers, return a new array where each element is the rolling sum, but reset the sum to 0 
whenever a 0 is encountered in the original array.

📥 Input:
[1, 2, 3, 0, 4, 5, 0, 6]

📤 Output:
[1, 3, 6, 0, 4, 9, 0, 6]

*/

function rollingSum(arr) {
    let sum = 0;
    let ans = [];

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            ans.push(arr[i]);
            sum = 0;
            continue;
        } else {
            sum = sum + arr[i]
            ans.push(sum);
        }
    }
    console.log(ans);
    return ans;
}

rollingSum([1, 2, 3, 0, 4, 5, 0, 6])