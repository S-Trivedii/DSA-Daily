/*
  Q.1 What is a balance binary tree ?
  
  A balanced binary tree is a binary tree in which "height difference between the left and right subtree of 'any node' is at most 1 (balance factor)". 
  This ensures that operations like searching, inserting, and deleting remain efficient, with a time complexity of O(log n) in the worst case.

  Let's understand with the help of an example. In the below example the difference between left and right subtree is 1.

        10
       /  \
      5    15
     / \   / \
    3   7 12 18

  Let's calculate why the difference is 1.

Step 1: Let's calculate the height of each node left and right subtree  

Remember this goldern statement: "The height of a node(any node) is the longest path from that node to a leaf."

=> Node 3 and Node 7
    Both are leaf nodes (no children), so their height = 0.

=> Node 5
    Left child (3) has height 0, right child (7) has height 0.

:) Height of node 5 = max(0, 0) + 1 = 1. (Why add +1? See 2nd question )


=> Node 12 and Node 18
    Both are leaf nodes (no children), so their height = 0.

=> Node 15
    Left child (12) has height 0, right child (18) has height 0.

:) Height of node 15 = max(0, 0) + 1 = 1.


=> Root Node (10)
    Left child (5) has height 1, right child (15) has height 1.

:) Height of node 10 = max(1, 1) + 1 = 2.


Step 2: Let's calculate the balance factor

:) balance factor = height of left subtree - height of right subtree

NOTE: "In a balance binary tree the balance factor can atmost be 1." 

Node	Left Subtree Height	Right Subtree Height	Balance Factor
3	0	0	0
7	0	0	0
5	1	1	0
12	0	0	0
18	0	0	0
15	1	1	0
10	2	2	0

:) Since all nodes have a balance factor between -1 and 1, the tree is balanced.

NOTE: 
1. The height difference is calculated at each node, not just at the root.
2. If a tree is unbalanced, rotations (in AVL trees) or rebalancing techniques (like in Red-Black Trees) can be used to maintain balance.


Q.2 Why added +1 every time like this "max(0, 0) + 1" ?

To understand the answer, let's understand what is meant by "THE HEIGHT OF A TREE."

Remember this golden statement: "The height of a node (any node) in a tree is the number of edges on the longest path from that node to a leaf."

  Q. What are edges? That dash ( / ) connecting node 10 and 5 is an edge.
         10
        /
       5



Example 1: A single node
         
       20  -> This is just one node

 Since there are no child nodes, its height = 0.
 
  Q. How the height of node 20 is 0?

  "FORMULA TO CALCULATE THE HEIGHT OF ANY NODE"
  height(node) = max(height(left child), height(right child)) + 1

  Node 20  -  has no left child and right child. This means it has no edges also

  Applying formula: max(0, 0) + 0(no edge) = 0


Example 2: A tree with two levels

    20
   /
  5

  Node 5 (leaf node) has no children → height = 0.

  Node 20 has one child (5). The height of 5 is 0, but since 20 has an edge connecting to 5, the height of 20 is:

  max(left subtree height, right subtree height) + 1
  = max(0, -1) + 1
  = 0 + 1
  = 1


Example 3: A bigger tree

        10
       /  \
      5    15
     /
    3

Now, let's calculate the height at each node:

   1. Node 3 (leaf node) → no children → height = 0.
  
   2. Node 5:
      Left child (3) has height 0.
      No right child, so its height is -1 (or assumed 0).
      Applying the formula:
        max(0, -1) + 1 = 0 + 1 = 1

   3. Node 15 (leaf node) → no children → height = 0.
   4. Root Node (10):
        Left subtree (rooted at 5) has height 1.
        Right subtree (rooted at 15) has height 0.
        Applying the formula:
          max(1, 0) + 1 = 1 + 1 = 2



*/
