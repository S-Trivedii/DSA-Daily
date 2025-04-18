# Q. Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

# Note that you must do this in-place without making a copy of the array.

# LeetCode - 283 - Easy 

# Example 1:

# Input: nums = [0,1,0,3,12]
# Output: [1,3,12,0,0]
# Example 2:

# Input: nums = [0]
# Output: [0]

def move_zero_to_end(nums):
    i = 0
    j = 1

    while j < len(nums):
        if nums[i] == 0 and nums[j] != 0:
            nums[i], nums[j] = nums[j], nums[i]
            i += 1
        elif nums[i] != 0:
            i += 1

        j += 1

    return nums
     


