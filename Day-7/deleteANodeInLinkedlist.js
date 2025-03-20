// Q.237 - There is a singly-linked list head and we want to delete a node node in it.

// LeetCode - Medium 

// You are given the node to be deleted node. You will not be given access to the first node of head.

// All the values of the linked list are unique, and it is guaranteed that the given node node is not the last node in the linked list.

// Delete the given node. Note that by deleting the node, we do not mean removing it from memory. We mean:

// The value of the given node should not exist in the linked list.
// The number of nodes in the linked list should decrease by one.
// All the values before node should be in the same order.
// All the values after node should be in the same order.
// Custom testing:

// For the input, you should provide the entire linked list head and the node to be given node. node should not be the last node of the list and should be an actual node in the list.
// We will build the linked list and pass the node to your function.
// The output will be the entire list after calling your function.


// Example: 4->5->1-9->null     5 is givin (we have the reference given of 5)
// Output: 4->1->9->null

// T.C - O(n) | S.C - O(1)

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


function deleteNode(node) {
    let current = node;
    current = current.next;
    node.data = current.data;  // 4->1->1->9->null
    node.next = current.next;

}

deleteNode(new Node(5)); 
