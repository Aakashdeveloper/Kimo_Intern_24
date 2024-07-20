#List  = ["apple","mango","banana"]
Tuple = (10,20,30)
set = {1,2,3,4}
dictionaries = {"name":"John","age":10}

#List > mutable collections of items
#tuple > immutable collections of items


List  = ["apple","mango","banana"]
print(List)

>> List  = ["apple","mango","banana"]
>>> list  = ["apple","mango","banana"]
>>> list[0]
'apple'
>>> list.append('kiwi')
>>> list
['apple', 'mango', 'banana', 'kiwi']
>>> list[1]="Pineapple"
>>> list
['apple', 'Pineapple', 'banana', 'kiwi']
>>> list.insert(2,"Blueberry")
>>> list
['apple', 'Pineapple', 'Blueberry', 'banana', 'kiwi']
>>> list.pop()
'kiwi'
>>> list
['apple', 'Pineapple', 'Blueberry', 'banana']
>>> list.pop(1)
'Pineapple'
>>> list
['apple', 'Blueberry', 'banana']



////////
tuple
empty_tuple = ()
mixed_tuple = (1,'hii',0.3)

>>> numbers = (1,2,3,5)
>>> numbers[1]
2
>>> numbers[3]
5
>>> numbers = (1,2,3,4,5)
>>> numbers[1:4]
(2, 3, 4)
>>> numbers[:3]
(1, 2, 3)
>>> numbers[2:]
(3, 4, 5)
>>> numbers[::2]
(1, 3, 5)
>>> letters = ('a','b','c')
>>> numbers+letters
(1, 2, 3, 4, 5, 'a', 'b', 'c')
>>> len(numbers)
5
