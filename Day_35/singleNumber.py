#  Q. Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
#  You must implement a solution with a linear runtime complexity and use only constant extra space.

#  136. LeetCode - Easy

#  Example 1:
#  Input: nums = [2,2,1]
#  Output: 1

#  Example 2:
#  Input: nums = [4,1,2,1,2]
#  Output: 4


### --------------- Solution ---------------

# The above question can be done using multiple ways like xor, sorting and using dictionary 

# The equivalent of Map() data structure in python is dictionary. How dictionary works, see the below code

def single_num(nums):
    # creating an empty dictionary
    freq = {}

    for num in nums:
        freq[num] = freq.get(num, 0) + 1

    for key, value in freq.items():
        if value == 1:
            return key        



# freq[num] = freq.get(num, 0) + 1

# dict.get(key, default):
# This method is used to safely get the value for a key in a dictionary.

# If the key exists, it returns the value.

# If the key doesn’t exist, it returns the default value you provide.