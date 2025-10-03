const express = require('express')

const app = express()
const { adminAuth,userAuth } = require('./middlewares/auth.js')
app.use('/admin',adminAuth);
app.get('/user/admin',userAuth,(req,res) =>{
   res.end("user fetched sucessfully")
})
app.post('/user/data',(req,res) =>{
   res.send("data fetched sucesfully")
})

app.get('/admin/getalladata',(req,res) =>{
  res.send("data get sucesfully")
});
app.get('/admin/deleteAlldata',(req,res) =>{
   res.send("data deleted sucesfuuly")
});

app.listen(3000,() =>{
    
})