'''
Q. Convert an array to linked list and return its head.

Example: [1, 2, 3, 4, 5]
Output: 1->2->3->4->5->null

'''

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


def arr_to_list(arr):
    if not arr:
        return None

    head = Node(arr[0])
    current = head

    for i in range(1, len(arr)):
        new_node = Node(arr[i])
        current.next = new_node
        current = current.next

    return head

# Helper function to print the linked list (optional, for checking)
def print_list(head):
    current = head
    while current:
        print(current.data, end=" -> ")
        current = current.next
    print("None")

# Example usage:
head1 = arr_to_list([1, 2, 3, 4, 5])  # 1 -> 2 -> 3 -> 4 -> 5 -> None
print_list(head1)

head2 = arr_to_list([5])  # 5 -> None
print_list(head2)





