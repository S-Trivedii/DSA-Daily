// Q. Given the root of a Binary Search Tree. The task is to find the minimum valued element in this given BST.

// Examples

// Input: root = [5, 4, 6, 3, N, N, 7, 1]
// Output: 1

function minValue(root) {
  if (!root.left) {
    return root.data;
  }
  return this.minValue(root.left);
  /*
        Hint: In a Binary Search Tree (BST), the left child of a node always has a 
        smaller value than the node itself, and the right child has a larger value. 
        Check if your logic for traversing to the leftmost node is correctly 
        following this property.
        */
}
