# Write a recursive function to return the nth Fibonacci number.

# 🔹Example:


# Input: 6  
# Output: 8  # (0, 1, 1, 2, 3, 5, 8)

def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(6))  # Output: 8
