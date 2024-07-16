const express = require('express')
const mongoose = require('mongoose')
const app = express()
const dotenv = require('dotenv')
const cookieParser=require('cookie-parser')
const authRoute=require('./routes/auth.js')
const userRoute=require('./routes/users.js')
const postRoute = require('./routes/posts.js')
const commentRoute=require('./routes/comments')


const connectdb = async() => {
     try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("database connect successfully")
     }
     catch(err){
        console.log(err);
     }
}

dotenv.config()

//middleware
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/posts",postRoute)
app.use("/api/comments",commentRoute)

app.listen(process.env.PORT,()=>{
    connectdb();
    console.log("app is running on port "+process.env.PORT);
})