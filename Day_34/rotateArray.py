# Q. Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

# LeetCode - Medium - 189

#  Example 1:

#  Input: nums = [1,2,3,4,5,6,7], k = 3
#  Output: [5,6,7,1,2,3,4]


def rotate_by_k(nums, k):
    # case 1: k = 0
    if k == 0 or len(nums) == 0
        return nums    


    # case 2. k > len(nums), find actual k
    actualK = k % len(nums)

    i = 0
    j = len(nums) - 1

    # reverse the whole list
    while i < j:
        nums[i], nums[j] = nums[j], nums[i]
        i += 1
        j -= 1

    i = 0
    j = actualK - 1

    # reverse the k part
    while i < j:
        nums[i], nums[j] = nums[j], nums[i]
        i += 1
        j -= 1

    # reverse the remaining part
    i = actualK
    j = len(nums) - 1

    while i < j:
        nums[i], nums[j] = nums[j], nums[i]
        i += 1
        j -= 1


    return nums        


# Another way of writing above code with in-built methods in python

def rotate_by_k(nums, k):
    if k == 0 or len(nums) == 0:
        return nums

    k = k % len(nums)

    # Step 1: Reverse the entire array
    nums.reverse()

    # Step 2: Reverse first k elements
    nums[:k] = reversed(nums[:k]) 

    # Step 3: Reverse remaining elements
    nums[k:] = reversed(nums[k:]) 

    return nums



# Note: The notation nums[:k] is slicing in Python. This means we are selecting the first k elements of the array (nums), starting from index 0 up to index k-1.

# nums[k:] is another slicing operation. This slice includes all elements starting from index k to the end of the list.

#print(nums[:k]) this will give me first a list from 0 to k - 1.



