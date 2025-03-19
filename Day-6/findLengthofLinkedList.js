class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function getLength(head) {
    let count = 0;
    let current = head;

    while (current) {
        count++;
        current = current.next;
    }

    return count;
}

// Example 
let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));

console.log(getLength(head)); // Output: 4
