const PORT = 5000
const express = require("express")
const app = express()
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv')
const { connectToDb }= require('./db/connecttodb')
dotenv.config()


// middlewares
app.use(express.json())
app.use(cookieParser())



//  app routers 
app.use("/", require('./routers/auth'))
app.use("/api/campaign", require("./routers/campaignRoute"))
app.use("/api/admin", require("./routers/campaignRoute"))

// app listening
app.listen(PORT, ()=>{
    connectToDb()
    console.log(`PORT running on ${[PORT]}`);
})