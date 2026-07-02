# First number/item that does not repeat
def first_no_repeat(arr):
    count = {}
    for x in arr:
        # count how many times each number appears
        count[x] = count.get(x, 0) + 1
    
    for x in arr:
        # first number whose count is exactly 1
        if count[x] == 1:
            return x
    
    return None


if __name__ == "__main__":
    arr = [1,2, 3, 4, 4, 2, 1, 4, 3, 2 ,3, 6, 4, 3]
    result = first_no_repeat(arr)
    print(f"First non-repeating number:{result}")
