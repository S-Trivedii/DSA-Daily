// Q. Given the root of a binary tree, return the postorder traversal of its nodes' values.

// Example 1:
// Input: root = [1,null,2,3]
// Output: [3,2,1]

const postorderTraversal = (root) => {
  let ans = [];

  function traversal(root) {
    if (root === null) {
      return;
    }

    traversal(root.left);
    traversal(root.right);
    ans.push(root.val);
  }

  traversal(root);

  return ans;
};
