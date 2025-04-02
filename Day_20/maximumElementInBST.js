// Q. Find max element in BST

function maxValue(root) {
  if (!root.right) {
    return root.data;
  }
  return maxValue(root.right);
}

/*
    Hint: In a Binary Search Tree (BST), the right child of a node always has a 
    larger value than the node itself, and the left child has a smaller value. 
    Make sure your logic correctly traverses to the rightmost node to find the maximum value.
*/
