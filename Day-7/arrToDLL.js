// Q. Geek is learning data structures and is familiar with linked lists, but he's curious about how to access the previous element in a linked list in the same way that we access the next element. His teacher explains doubly linked lists to him.

// Given an integer array arr of size n. Construct the doubly linked list from arr and return the head of it.

// Example 1:

// Input:
// n = 5
// arr = [1,2,3,4,5]
// Output:
// 1 2 3 4 5
// Explanation: Linked list for the given array will be 1<->2<->3<->4<->5.

// TC- O(n) | SC- O(1)

class Node {
    constructor(data, next, prev) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}


function arrToDll(arr) {

    const head = new Node(arr[0]);
    let current = head;

    for(let i = 1; i<arr.length; i++) {
        let newNode = new Node(arr[i]);
        current.next = newNode; // forward connection
        newNode.prev = current; // backward connection

        current = newNode;
    }

    return head;

}

arrToDll([1, 2, 3, 4, 5]);