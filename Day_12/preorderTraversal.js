// Q. Given the root of a binary tree, return the preorder traversal of its nodes' values.

// Example 1:

// Input: root = [1,null,2,3]
// Output: [1,2,3]

const preorderTraversal = (root) => {
  let ans = [];

  function traversal(root) {
    if (root === null) {
      return;
    }

    ans.push(root.val);
    traversal(root.left);
    traversal(root.right);
  }

  traversal(root);
  return ans;
};
