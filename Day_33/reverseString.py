# Write a recursive function to reverse a string.

# 🔹Example:

# Input: "hello"  
# Output: "olleh"


# NOTES: String are immutable in python

def reverse_string(s):
    i = 0
    j = len(s) - 1
    s_list = list(s)  # Convert string to a list to allow modification

    while i <= j:
        s_list[i], s_list[j] = s_list[j], s_list[i]  # Swap characters
        i += 1
        j -= 1

    return ''.join(s_list)  # Convert list back to string

print(reverse_string('hello'))  # Output: "olleh"

