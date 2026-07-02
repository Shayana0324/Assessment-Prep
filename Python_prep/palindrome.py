def is_palindrome(str):
    left, right = 0, len(str) - 1

    while left < right:
        # Skip non-alphanumeric characters from the left
        while left < right and not str[left].isalnum():
            left += 1
        
        # Skip non-alphanumeric characters from the right
        while left < right and not str[right].isalnum():
            right -= 1
        
        if str[left].lower() != str[right].lower():
            return "not a palindrome" 
        
        left += 1
        right -= 1
    return "a palindrome"

if __name__ == "__main__":
    string = input("Enter a string: ")
    result = is_palindrome(string)
    print(f'"{string}" is {result}')