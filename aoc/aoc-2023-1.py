digits=[
'one',
'two',
'three',
'four',
'five',
'six',
'seven',
'eight',
'nine',
]

def find_sub_str(s1,s2):
    start = 0
    indices =[]
    while True:
        start = s1.find(s2, start)
        if(start == -1):
            break
        indices.append(start)
        start +=1
    return indices

def find_first_and_last_digit(s):
    first_digit = None
    last_digit = None
    first_idx = -1
    last_idx = -1

    for idx, char in enumerate(s):
        if char.isdigit():
            if first_digit is None:
                first_digit = char  # Assign the first digit found
                first_idx = idx
            last_digit = char  # Update last digit found
            last_idx = idx
    
    return first_digit, last_digit, first_idx, last_idx

    
with open('1.log', 'r') as file:
    lines = [line.strip() for line in file if line.strip()]

sum = 0
for line in lines:
    modifyline = line
    leftMin = 999999999999999999
    tmpleft = 0
    tmpright = 0
    rightMax = -1

    for idx,di in enumerate(digits):
        # pos = line.find(di) # this find the first match and then stop
        # shoule find all occurences of digit str
        poses = find_sub_str(line, di)

        if len(poses) > 0:    
            if poses[-1] > rightMax:
                rightMax = poses[-1]
                tmpright = idx+1
            if poses[0] < leftMin:
                leftMin = poses[0]
                tmpleft = idx + 1
            
    a,b, idx_a, idx_b = find_first_and_last_digit(line)
    if idx_a == -1 or idx_a > leftMin:
        left = tmpleft
    else:
        left = a

    # print(a,b,idx_a, idx_b)
    if idx_b == -1 or idx_b < rightMax:
        right = tmpright
    else:
        right = b
    # print(left,right)
    sum += (int(left)*10+int(right))


print(sum)
