const express = require('express')
const app = express()
const port = 8080;
//routes
app.get('/',(req,res)=>{
    res.send("hello express")
})
app.listen(port,()=>console.log(`app is listening at ${port}`))
