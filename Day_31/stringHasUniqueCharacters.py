# Q: Check if a String has All Unique Characters Using ASCII


# Write a function that determines if a given string has all unique characters (no character repeats). Use ASCII and avoid using additional libraries like set() or collections.

# Example:

# Input: "abcdef"
# Output: True

# Input: "hello"
# Output: False  # 'l' repeats


## --------- Approach ---------------

def has_unique_characters(s):
    if len(s) > 256:
        return False # # More characters than total ASCII, must be duplicate
    
    seen = [False] * 256

    for ch in s:
        ascii_val = ord(ch)
        if seen[ascii_val]:
            return False
        seen[ascii_val] = True

    return True    

