#for
'''city = ["Delhi","Mumbai","Amsterda"]

for item in city:
    print(item)

for char in "hello":
    print(char)

for i in range(5):
    print(i)'''


#while condition:

count = 0
while count < 5:
    print(count)
    count += 1

for num in (2,20):
    is_prime = True
    for i in range(2, num):
        if num%i == 0:
            is_prime = False
            break
    if is_prime:
        print(f"{num} is prime number")

        