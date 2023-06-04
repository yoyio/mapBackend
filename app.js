const express=require('express')
const app=express()
const port=3001
const routes=require('./routes/index')
const session=require('express-session')
const SESSION_SECRET='secret'
//use body-parser
app.use(express.urlencoded({extended:true}))
app.use(express.json())
//use session
app.use(session({secret:SESSION_SECRET,resave:false,saveUninitialized:true}))
//routes
app.use(routes)

//listening
app.listen(port,()=>{
  console.info(`App is listening on localhost:${port}`)
})