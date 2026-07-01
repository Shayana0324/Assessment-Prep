# Print numbers from 1 to N
def printAsc(N):
    for i in range(N):
        print(i)

printAsc(10)

# Print numbers from N to 1
def printDesc(N):
    for i in range(N, 0, -1):
        print(i)
printDesc(10)