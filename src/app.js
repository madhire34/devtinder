const express = require('express')

const app = express()

app.use( '/',(req,res) =>{
    res.end("heiiiiiii")
});
app.use('/hello',(req,res) =>{
    res.end("ye7ytefgegf")
});

app.listen(3000,() =>{
    console.log('helllo')
})