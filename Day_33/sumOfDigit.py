# Given an integer n, write a recursive function to return the sum of its digits.

# 🔹Example:


# Input: 1234  
# Output: 10  # (1 + 2 + 3 + 4)

def sumOfDigit(num):
    total = 0
    
    while(num > 0):
        digit = num % 10
        total = total + digit
        num = num // 10

    return total

print(sumOfDigit(1234))    