// Do this question iteratively
// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

const reverseList = function (head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    let nextNode = current.next; // Store the next node
    current.next = prev; // Reverse the link
    prev = current; // Move prev forward
    current = nextNode; // Move current forward
  }

  return prev; // prev will be the new head
};
