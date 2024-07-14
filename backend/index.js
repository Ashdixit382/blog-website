const express = require('express')
const mongoose = require('mongoose')
const app = express()

const connectdb = async() => {
     try{
        await mongoose.connect("mongodb+srv://johndixit575:ashish1@cluster0.lgcx6jw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("database connect successfully")
     }
     catch(err){
        console.log(err);
     }
}

app.listen(6000,()=>{
    connectdb();
    console.log("app is running on port 5000");
})