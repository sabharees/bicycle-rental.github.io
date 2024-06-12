const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://sabhareeswarans2022ece:SabHar27@cluster0.ks6guuj.mongodb.net/Renticle' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose