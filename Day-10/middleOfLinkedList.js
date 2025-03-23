// Leetcode - Easy - 876
// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

// Example 2:
// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

// ------------ Approach --------------
/*
Take two pointers fast and slow. Fast pointer moves twice as fast as slow pointer. This algorithm is also known as Floyd's Tortoise and Hare algorithm

1. Use two pointers:

slow moves one step at a time.
fast moves two steps at a time.

2. When fast reaches the end, slow will be at the middle.
*/

// TC-O(n)
// SC-O(1)

function middleNode(head) {
  if (head.next === null) return head;
  if (!head) return null;

  let slow = head;
  let fast = head;

  // Q. Why use && instead of ||
  // A. Imagin your fast pointer is at the last node, it need to move two step but the next of the last is null. So it won't be able to move
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

middleNode(head);
