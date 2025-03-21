// Q. Given a Doubly Linked list and a position. The task is to delete a node from a given position (position starts from 1) in a doubly linked list and return the head of the doubly Linked list.

// Examples:

// Input: LinkedList = 1 <--> 3 <--> 4, x = 3
// Output: 1 <--> 3

// ---------Approach-------------------------
function deleteNodeInDLL(head, x) {
  // If the list is empty, return null
  if (!head) {
    return null;
  }

  // If the node to be deleted is the head
  if (x === 1) {
    head = head.next; // Move head to the next node
    if (head) {
      head.prev = null; // Set the prev of the new head to null
    }
    return head;
  }

  // Traverse to the node at position x
  let current = head;
  let count = 1;

  while (current && count < x) {
    current = current.next;
    count++;
  }

  // If the position is out of bounds, return the original head
  if (!current) {
    return head;
  }

  // Adjust the pointers to bypass the node to be deleted
  if (current.prev) {
    current.prev.next = current.next; // Update the next of the previous node
  }
  if (current.next) {
    current.next.prev = current.prev; // Update the prev of the next node
  }

  // Return the head of the modified list
  return head;
}

deleteNodeInDLL(head, 3); // 1<->3
