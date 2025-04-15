# Write a recursive function to calculate the factorial of a given number n.

# Example:

# Input: 5  
# Output: 120  # (5 * 4 * 3 * 2 * 1)


def factorial(num):
    if num == 0 or num == 1:
        return 1
    
    return num * factorial(num - 1)


print(factorial(5))