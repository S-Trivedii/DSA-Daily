// Q. Convert an array to linked list and return its head.

// Example: [1, 2, 3, 4, 5]
// Output: 1->2->3->4->5->null


// --------Approach------------------
// T.C - O(n) | S.C - O(1)



class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


function arrToList(arr) {
    // Creating a node
    const head = new Node(arr[0]);
    let current = head;

    for(let i = 1; i<arr.length; i++) {
        let newNode = new Node(arr[i]);
        current.next = newNode;
        current = current.next;
    }

    return head;
}

arrToList([1, 2, 3, 4, 5]); // 1->2->3->4->5->null
arrToList([5]); // 5->null