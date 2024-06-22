let express = require('express');
let app = express();
let Mongo = require('mongodb')
let port = 9110;
let cors = require('cors')
let {dbConnect,getData,postData, updateData,deleteData} = require('./controller/dbContoller');

app.use(express.json())
app.use(cors())

app.get('/',(req,res) => {
    res.send("Hii From Express")
});

app.get('/location',async (req,res) => {
    let query = {};
    let collection = "location";
    let output = await getData(collection,query)
    res.send(output)
});

app.get('/details/:id',async(req,res) => {
    let id = Number(req.params.id)
    let query = {restaurant_id:id};
    let collection = "restaurants";
    let output = await getData(collection,query)
    res.send(output)
})

app.get('/filter/:mealId',async(req,res) => {
    let mealId = Number(req.params.mealId);
    let cuisineId = Number(req.query.cuisineId);
    let lcost = Number(req.query.lcost)
    let hcost = Number(req.query.hcost)
    if(cuisineId){
        query={
            "mealTypes.mealtype_id":mealId,
            "cuisines.cuisine_id":cuisineId
        }
    }else if(lcost & hcost){
        query={
            "mealTypes.mealtype_id":mealId,
            $and:[{cost:{$gt:lcost,$lt:hcost}}]
        }
    }
    else{
        query={
            "mealTypes.mealtype_id":mealId
        }
    }
    let collection = "restaurants";
    let output = await getData(collection,query)
    res.send(output)
})

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

app.get('/menu/:id',async (req,res) => {
    let id = Number(req.params.id)
    let query={restaurant_id:id};
    let collection = "menu"
    let output = await getData(collection,query)
    res.send(output)
})

//{"id":[1,2,3]}
app.post('/menuDetails',async (req,res) => {
    if(Array.isArray(req.body.id)){
        let query = {menu_id:{$in:req.body.id}}
        let collection = "menu"
        let output = await getData(collection,query)
        res.send(output)
    }else{
        res.send("Please send valid input")
    }
})

app.get('/orders',async (req,res) => {
    let query={};
    if(req.query.email){
        query = {email:req.query.email}
    }
    let collection = "orders"
    let output = await getData(collection,query)
    res.send(output)
})


app.post('/placeOrder',async(req,res) => {
    let data = req.body;
    let collection = "orders"
    console.log(req.body)
    let response = await postData(collection,data)
    res.send(response)
})

app.put('/updateOrder',async(req,res) => {
    let collection = "orders"
    let condition = {"_id":new Mongo.ObjectId(req.body._id)}
    let data = {
        $set:{
            "status":req.body.status
        }
    }
    let response = await updateData(collection,condition,data)
    res.send(response)
})

app.delete('/deleteOrder',async(req,res) => {
    let collection = "orders"
    let condition = {"_id":new Mongo.ObjectId(req.body._id)}
    let response = await deleteData(collection,condition)
    res.send(response)
})



app.listen(port,(err) => {
    dbConnect()
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
});