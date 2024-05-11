var city = "amSterDam"
undefined
city.toUpperCase()
'AMSTERDAM'
city.toLowerCase()
'amsterdam'
city.length
9
city[0]
'a'
city[1]
'm'
city.charAt(0)
'a'
city.charAt(1)
'm'


var city = "amSterDam"
city.slice(1)
'mSterDam'
city.slice(2)
'SterDam'
city.slice(2,4)
'St'

var a = "john"
var b = "John" 
undefined
a == b
false
a.toLowerCase() == b.toLowerCase()
true

var city = "amSterDam"
undefined
city.charAt(0).toUpperCase()
'A'
city.slice(1).toLowerCase()
'msterdam'
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
'Amsterdam'
var city = "paRiS"
undefined
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
'Paris'

var uname = "   Nikita  "
uname.length
11
uname.trim()
'Nikita'