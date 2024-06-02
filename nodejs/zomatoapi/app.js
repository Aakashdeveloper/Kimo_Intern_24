let express = require('express');
let app = express();
let port = 9110;

app.get('/',(req,res) => {
    res.send("Hii From Express")
});

app.get('/location',(req,res) => {
    res.send("This is Location route")
})

app.listen(port,(err) => {
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
})