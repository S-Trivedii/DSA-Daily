// Q. Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,3,2]

const inorderTraversal = (root) => {
  let ans = [];

  function traversal(root) {
    if (root === null) {
      return;
    }

    traversal(root.left);
    ans.push(root.val);
    traversal(root.right);
  }

  traversal(root);

  return ans;
};
