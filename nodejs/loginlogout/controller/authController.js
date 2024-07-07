let express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');
let bcrypt = require('bcryptjs');
let config = require('../config');
const User = require('../model/userModel');

router.use(express.json());


//get all users
router.get('/users',async (req,res) => {
    let response = await User.find({})
    res.send(response)
})


// register User
router.post('/register',async (req,res) => {
    let hashpassword = bcrypt.hashSync(req.body.password,8);
    let response = await User.create({
        name:req.body.name,
        email:req.body.email,
        password:hashpassword,
        phone:req.body.phone,
        role:req.body.role?req.body.role:'User'
    })
    res.send('Registration Successful')
})

// loginuser
router.post('/login',async(req,res) => {
    let data =  await User.findOne({email:req.body.email})
    if(!data){res.send({auth:false,token:'No User Foudn Register First'})}
    else{
        const passIsValid = bcrypt.compareSync(req.body.password,data.password);
        if(!passIsValid)res.send({auth:false,token:'Invalid PAssword'})
        let token = jwt.sign({id:data._id},config.secret,{expiresIn:86400})
        res.send({auth:true,token:token})
    }
})


module.exports = router