// Do this question recursively
// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

const reverseList = function (head) {
  if (head === null || head.next === null) {
    return head; // Base case: return the last node (new head)
  }

  let newHead = reverseList(head.next); // Recursively reverse the rest
  head.next.next = head; // Reverse the link
  head.next = null; // Set current node's next to null

  return newHead; // Return new head
};
