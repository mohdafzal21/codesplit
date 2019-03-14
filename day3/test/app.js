const express = require('express')
const app = express()
const port = 8080;
const path = require('path')
const bodyParser = require('body-parser')
app.set('views', path.join(__dirname,'views'))
app.set('view engine' ,'ejs')
//connect app.js with public folder
app.use(express.static(path.join(__dirname,'public')))
//body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const friends = ["a" , "b" , "c"]
//routes
app.get('/',(req,res)=>{
    
    res.send("hello express")
});
app.get('/home', (req,res)=>{
   res.render('home', {friends:friends})
})
app.get('/addfriend',(req,res)=>{
    res.render('addfriend')
})
app.post('/addfriend',(req,res)=>{
    console.log(req.body.friends)
    friends.push(req.body.friends)
    res.redirect('/home')
})
app.listen(port,()=>console.log(`app is listening at ${port}`))

