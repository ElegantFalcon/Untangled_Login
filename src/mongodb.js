const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/MindSpace")
.then(()=>{
    console.log("Mongodb connected");
})
.catch(()=>{
    console.log("failed to connect");
})

const logInSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    password :{
        type : String,
        required : true
    }
})

const collection = new mongoose.model("Collection1", logInSchema)

module.exports = collection
