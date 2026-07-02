# First number/item that does not repeat
def first_no_repeat(arr, arr_str):
    count = {}
    for x in arr:
        # count how many times each number appears
        count[x] = count.get(x, 0) + 1
    
    for x in arr:
        # first number whose count is exactly 1
        if count[x] == 1:
            return x
        
    for item in arr_str:
        # count how many times each item appears
        count[item] = count.get(item, 0) + 1
    
    for item in arr_str:
        # first item whose count is exactly 1
        if count[item] == 1:
            return item
    
    return None


if __name__ == "__main__":
    arr = [1,2, 3, 4, 4, 2, 1, 4, 3, 2 ,3, 6, 4, 3]
    arr_str = ['abc', 'cde', 'efg', 'abc', 'cde', 'efg', 'xyz']
    result = first_no_repeat(arr, "")
    print(f"First non-repeating number:{result}")

    result = first_no_repeat("", arr_str)
    print(f"First non-repeating item:{result}")
