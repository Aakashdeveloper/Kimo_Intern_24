var a = 10
var b = 20
a+b
30

keyword functionname(parameter){
    return 
}

function add(a,b){
    return a+b
}

add(3,5)
8

add(5,8)
13

add("hi","test")
'hitest'
add(3343,4436)
7779

add(1,2,3)
3
add(1)
NaN

//es5
function add(a,b){
    return a+b
}

//es6
let add = (a,b) => {return a+b}
add(2,5)
7