// Q. Given a doubly-linked list, a position p, and an integer x. The task is to add a new node with value x at the position just after pth node in the doubly linked list and return the head of the updated list.

// Examples:

// Input: LinkedList: 2<->4<->5, p = 2, x = 6 
// Output: 2<->4<->5<->6
// Explanation: p = 2, and x = 6. So, 6 is inserted after p, i.e, at position 2 (0-based indexing).


// ----------Approach --------------------------
/*
Case to Remember:
1. what if head is null or empty
2. what if p is out of bounds


*/


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}


    function addNode(head, p, x) {
        // If list is empty, create a new node as head.
        if (!head) return new Node(x); 

        let temp = head;
        let count = 0;

        // Traverse to the pth node
        while (temp !== null && count < p) {
            temp = temp.next;
            count++;
        }

        // If p is out of bounds, return unchanged list.
        if (!temp) return head; 

        // Create new node
        let newNode = new Node(x);
        
        // Save next node (if exists)
        let nextNode = temp.next;

        // Insert newNode after temp
        temp.next = newNode;
        newNode.prev = temp;

        if (nextNode) {
            newNode.next = nextNode;
            nextNode.prev = newNode;
        }

        return head;
    }

addNode(head, 2, 6);