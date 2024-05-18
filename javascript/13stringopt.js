var city = "amStERdAm"
city.toUpperCase()
'AMSTERDAM'
city.toLowerCase()
'amsterdam'
city[0]
'a'
city[1]
'm'
city.charAt(0)
'a'
city.charAt(1)
'm'
city.charAt(-1)
''
city.at(1)
'm'
city.at(-1)
'm'
city.at(2)
'S'
city.at(-2)
'A'


var a = "john"
var b = "John"

a == b
false
a.toLowerCase() == b.toLowerCase()
true



var city = "aMstErDam"
undefined

city.slice(1)
'MstErDam'
city.slice(2)
'stErDam'
city.slice(2,5)
'stE'

var city = "aMstErDam"

var city = "aMstErDam"
city.charAt(0).toUpperCase()
'A'
city.slice(1).toLowerCase()
'msterdam'
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
'Amsterdam'
var a = "pArIs"
undefined
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
'Amsterdam'
var city = "pArIs"
undefined
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
'Paris'

var uname = "  Nikita  "

uname.length
10
uname.trim()
'Nikita'
uname.trim().length
6
