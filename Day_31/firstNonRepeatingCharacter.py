#  Q. Given a string, return the first non-repeating character. If all characters repeat, return "None".

# Example:

# Input: "aabbcdd"
# Output: "c"

# Input: "aabbcc"
# Output: "None"

## -------- Approach --------------------- 

def first_non_repeating_character(s):
    # creating a list of 256 element of value 0
    freq = [0] * 256

    for char in s:
        # ord(character) is a built-in method which return the ASCII value of a character
        freq[ord(char)] += 1

    for char in s:
        if freq[ord(char)] == 1:
            return char

    return 'None'        

