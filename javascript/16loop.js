> iterate over the array and can also generate the series of values

for(i=0;i<5;i++){
    console.log(i)
}
0
1
2
3
4

var a = ['Boston', 'Delhi', 'Mumbai', 'Pune', 'Amsterdam']
for(i=0;i<a.length;i++){
    console.log(a[i])
}

Boston
Delhi
Mumbai
Pune
Amsterdam


var i = 0
while(i<5){
    console.log(i)
    i++
}

var i = 10
do{
    console.log(i)
    i++
}
while(i<5)


var city = ['Boston', 'Delhi', 'Mumbai', 'Pune', 'Amsterdam']
for(mycity of city){
    console.log(mycity)
}

Boston
VM2258:4 Delhi
VM2258:4 Mumbai
VM2258:4 Pune
VM2258:4 Amsterdam