'''
Q. You are given an array arr of positive integers. Your task is to find all the leaders in the array. An element is considered a leader if it is greater than or equal to all elements to its right. The rightmost element is always a leader.

Examples:

Input: arr = [16, 17, 4, 3, 5, 2]
Output: [17, 5, 2]
Explanation: Note that there is nothing greater on the right side of 17, 5 and, 2.

'''

def leader_in_array(arr):
    leader = []
    maxi = float('-inf') #  creates a negative infinity value

    # running a reverse loop in python - more about below
    for i in range(len(arr) - 1, -1, -1): 
        if i == len(arr) - 1:
            leader.append(arr[i])  # equivalent of push method
            maxi = arr[i]
        elif arr[i] >= maxi:
            leader.append(arr[i])
            maxi = arr[i]

    return leader[::-1] # this will reverse the list from [2, 5, 17] to [17, 5, 2]     

leader_in_array([16, 17, 4, 3, 5, 2])       


# How to run a reverse loop in python? Let's understand with an example

# arr = [1, 2, 3, 4];   print 4, 3, 2, 1

'''
for i in range(len(arr) - 1, -1, -1):
for i in range(start, where to stop(exclusive), decrement)

start -> start from the len(arr) - 1 index
where to stop -> stop at index -1, since index -1 is not included
decrement -> by how much you want to reduce to run a loop

'''




