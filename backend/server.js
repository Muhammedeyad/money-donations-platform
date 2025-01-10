const PORT = 5000
const express = require("express")
const app = express()
const dotenv = require('dotenv')
const { connectToDb }= require('./db/connecttodb')
dotenv.config()


// middlewares
app.use(express.json())

//  app routers 
app.use("/", require('./routers/auth'))


// app listening
app.listen(PORT, ()=>{
    connectToDb()
    console.log(`PORT running on ${[PORT]}`);
})