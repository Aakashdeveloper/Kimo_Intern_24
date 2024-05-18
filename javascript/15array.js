array is a collection of homogenious as well as hetriogenious datatype

var a = [1,2,3,4,5] >> Array of number
var b = ["Hii","Hello","test","Bie"] >> Array of strings
var c = [true,false,false,true,true] >> Array of boolean

var d = [1,2,3,"df","fd","g",true,3,2,"dde"]

var city = ["Delhi","Mumbai","Pune","Amsterdam"]
city.length
4
city[0]
'Delhi'
city[1]
'Mumbai'
city[city.length-1]
'Amsterdam'
city.push('Helsinki')
5
city
(5) ['Delhi', 'Mumbai', 'Pune', 'Amsterdam', 'Helsinki']
city.push('London')
6
city
(6) ['Delhi', 'Mumbai', 'Pune', 'Amsterdam', 'Helsinki', 'London']
city.pop()
'London'
city.pop(3)
'Helsinki'
city
(4) ['Delhi', 'Mumbai', 'Pune', 'Amsterdam']
city.unshift('Boston')
5
city
(5) ['Boston', 'Delhi', 'Mumbai', 'Pune', 'Amsterdam']
city.shift()
'Boston'


push > add in the end
unshift > add in the beginning
pop> romove the last value
shift > remove the first value

var a = ['Boston', 'Delhi', 'Mumbai', 'Pune', 'Amsterdam']


a.slice(1)
(4) ['Delhi', 'Mumbai', 'Pune', 'Amsterdam']
a.slice(2,4)
(2) ['Mumbai', 'Pune']

var a = ['Boston', 'Delhi', 'Mumbai', 'Pune', 'Amsterdam']

a.splice(indexNumber,deleteCount,value)

a.splice(2,1)
var a = ['Boston', 'Delhi', 'Mumbai', 'Pune', 'Amsterdam']



a.splice(2,1) > Remove 1 value for index number 2

['Mumbai']
a.splice(3,0,'Paris','Hongkong') > Do not remove any value but on index 3 add 2 values
[]
a
(6) ['Boston', 'Delhi', 'Pune', 'Paris', 'Hongkong', 'Amsterdam']
a.splice(2,1,'Innsburg') > Remove 1 value from index number 1 and add 1 value
['Pune']
a
(6) ['Boston', 'Delhi', 'Innsburg', 'Paris', 'Hongkong', 'Amsterdam']


var a = ['Boston', 'Delhi', 'Mumbai', 'Pune', 'Amsterdam']



var a = ['Boston', 'Delhi', 'Mumbai', 'Pune', 'Amsterdam']
a.indexOf('Boston')
0
a.indexOf('Pune')
3
a.indexOf('Indore')
-1
a.indexOf('London')
-1
