#  Q. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

#  You may assume that each input would have exactly one solution, and you may not use the same element twice.
#  You can return the answer in any order.

# Leetcode - Easy - 1

#  Example 1:
#  Input: nums = [2,7,11,15], target = 9
#  Output: [0,1]
#  Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].



def two_sum(nums, target):
    freq = {}
    for i in range(len(nums)):
        compliment = target - nums[i]

        # compliment exist
        if freq.get(compliment) != None: # there is no null instead None
            return [freq[compliment], i]
        else:
            freq[nums[i]] = i  # store the current number and its index


two_sum([2,7,11,15], 9)    

'''
Different ways to write below code:

-- if freq.get(compliment) != None: --

1. if compliment in freq:
2. if freq.get(compliment) is Not None: 

'''


# Notes: 

# Q. Why this not correct?

# freq[compliment] ❌, instead we have to do this
# freq.get(compliment) ✅, will return a value


# But why this works?

# person = {"name": "abhay"}
# person["name"]

# -------- Answer ----------

# person["name"], this works when key already exist,

# if key doesn't exist, for example, if name key doesn't exist then we have to do this, person.get(name)


