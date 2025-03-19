class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function insertAtEnd(head, x) {
    let newNode = new ListNode(x);
    
    // If the list is empty, return the new node as the head
    if (!head) return newNode; 

    let current = head;
    while (current.next) {
        current = current.next;
    }
    
    // Insert new node at the end
    current.next = newNode; 
    return head;
}


function printList(head) {
    let current = head;
    let result = [];
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(" -> "));
}

// Creating a sample linked list: 1 -> 2 -> 3
let head = new ListNode(1, new ListNode(2, new ListNode(3)));

printList(head); // Before insertion: 1 -> 2 -> 3
head = insertAtEnd(head, 4);
printList(head); // After insertion: 1 -> 2 -> 3 -> 4
