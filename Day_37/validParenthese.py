'''
Q. Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

 An input string is valid if:

 Open brackets must be closed by the same type of brackets.
 Open brackets must be closed in the correct order.
 Every close bracket has a corresponding open bracket of the same type.

 Example 1:

 Input: s = "()"
 Output: true

 Example 2:

 Input: s = "()[]{}"
 Output: true

 Example 3:

 Input: s = "(]"
 Output: false

 Example 4:

 Input: s = "([])"
 Output: true

'''

def is_valid(s: str) -> bool:
    stack = []
    bracket_map = {')': '(', '}': '{', ']': '['}

    for char in s:
        if char in bracket_map.values():  # opening brackets
            stack.append(char)
        elif char in bracket_map:  # closing brackets
            if not stack or stack[-1] != bracket_map[char]:
                return False
            stack.pop()
        else:
            return False  # for any invalid character

    return not stack  # stack should be empty if all brackets are balanced





