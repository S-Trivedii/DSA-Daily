// Given a linked list of n nodes and a key, the task is to check if the key is present in the linked list or not.

// Example:

// Input: n = 4, key = 3
// 1->2->3->4
// Output: true
// Explanation: 3 is present in Linked List, so the function returns true.


// --------Approach--------------------
/*
Nothing new, just traverse the list and check the node data
T.C - O(n) | S.C - O(1)
*/


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// head is givin 
function serchKey(n, head, key) {

    let current = head;
    for(let i = 0; i<n; i++) {
        if(current.data === key) {
            return true;
        }
    }

    return false;

}

searchKey(4, head, 3); // true