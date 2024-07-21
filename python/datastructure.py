#List  = ["apple","mango","banana"]
Tuple = (10,20,30)
set = {1,2,3,4}
dictionaries = {"name":"John","age":10}

#List > mutable collections of items
#tuple > immutable collections of items
#set>mutable collection of unique item
'''dict > unordered,mutable collection of key-value pair
key must be unique'''


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

>>> mySet = {1,2,3,'a','b','c'}
>>> mySet.add('test')
>>> mySet
{1, 2, 3, 'c', 'test', 'a', 'b'}
>>> mySet.add(9)
>>> mySet
{1, 2, 3, 'c', 'test', 'a', 9, 'b'}
>>> mySet.add('aa')
>>> mySet
{1, 2, 3, 'aa', 9, 'c', 'a', 'b', 'test'}
>>> mySet.add(3)
>>> mySet
{1, 2, 3, 'aa', 9, 'c', 'a', 'b', 'test'}
>>> mySet('a')
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'set' object is not callable
>>> mySet.remove('a')
>>> mySet
{1, 2, 3, 'aa', 9, 'c', 'b', 'test'}
>>> mySet.pop()
1
>>> mySet.pop()
2
>>> mySet
{3, 'aa', 9, 'c', 'b', 'test'}
>>> mySet.remove('z')
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyError: 'z'
>>> mySet.discard('z')
>>> 





myDict = {"name":"John","Age":10,"city":"Delhi"}