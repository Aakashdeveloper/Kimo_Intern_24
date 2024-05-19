var a = {} //object

var moviename = "Jab We Met"
var movierating = 4.7
var movInd = "Bollywood"

var moviename1 = "Avengers"
var movierating1 = 4.2
var movInd1 = "Hollywood"

var movie = {
    name:'Jab We Met',
    rating:4.7,
    ind:'Bollywood'
}


movie.name
'Jab We Met'
73Third-party cookie will be blocked. Learn more in the Issues tab.
movie.rating=4.5
4.5
movie
{name: 'Jab We Met', rating: 4.5, ind: 'Bollywood'}
movie.type="Romantic"
'Romantic'
movie
{name: 'Jab We Met', rating: 4.5, ind: 'Bollywood', type: 'Romantic'}
delete movie.ind
true
movie
{name: 'Jab We Met', rating: 4.5, type: 'Romantic'}


movie['name']
'Jab We Met'
movie['rating']
4.7

JSON > JavaScript Object Notification
> Array of Object
> Key value pair

var movies = [
    {
        name:'Jab We Met',
        rating:4.7,
        ind:'Bollywood'
    },
    {
        name:'Avenger',
        rating:4.2,
        ind:'Hollywood'
    }
]

movies[0].name
'Jab We Met'
movies[1].name
'Avenger'