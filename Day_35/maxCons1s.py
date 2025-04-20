# // Q. Given a binary array nums, return the maximum number of consecutive 1's in the array.

#  485. LeetCode - Easy

#  Example 1:

#  Input: nums = [1,1,0,1,1,1]
#  Output: 3
#  Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
#  Example 2:

#  Input: nums = [1,0,1,1,0,1]
#  Output: 2


def max_cons_1(nums):
    max_one = 0
    count = 0
    i = 0

    while i < len(nums):
        if nums[i] == 1:
            count += 1
            max_one = max(count, max_one)
        elif nums[i] != 1:
            count = 0

        i += 1    

    return max_one                    