let express = require('express');
let app = express();
let port = 9110;
let {dbConnect,getData} = require('./controller/dbContoller');

app.get('/',(req,res) => {
    res.send("Hii From Express")
});

app.get('/location',async (req,res) => {
    let query = {};
    let collection = "location";
    let output = await getData(collection,query)
    res.send(output)
});

app.get('/restaurants',async (req,res) => {
    let query = {};
    let stateId = req.query.stateId;
    let mealId =  req.query.mealId;
    if(stateId){
        query = {state_id:Number(stateId)}
    }else if(mealId){
        query = {"mealTypes.mealtype_id":Number(mealId)}
    }
    else{
        query = {}
    }
    let collection = "restaurants";
    let output = await getData(collection,query)
    res.send(output)
});

app.get('/mealType',async (req,res) => {
    let query={};
    let collection = "mealType"
    let output = await getData(collection,query)
    res.send(output)
})

app.listen(port,(err) => {
    dbConnect()
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
});