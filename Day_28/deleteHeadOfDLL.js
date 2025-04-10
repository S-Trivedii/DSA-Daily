/*
Given the head of a doubly linked list, remove the node at the head of the linked list and return the head of the modified list.


The head is the first node of the linked list.


Examples:
Input: head -> 1 <-> 2 <-> 3
Output: head -> 2 <-> 3
Explanation: The node with value 1 was removed.

Input: head -> 7
Output: head
Explanation: Note that the head has null value after the removal.

*/

// ------------ Approach ------------------

/*Definition of doubly linked list:
class ListNode {
    constructor(val = 0, next = null, prev = null) {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}
*/
class Solution {
  deleteHead(head) {
    // if head is null or there is only single node
    if (head === null || head.next === null) return null;

    let current = head;
    head = head.next;
    current.next = null;
    head.prev = null;

    return head;
  }
}
