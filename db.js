const mongoose=require('mongoose');
require('dotenv').config();

//Define the MongoDB connection URL
// const mongoURL='mongodb://127.0.0.1:27017/hotels'; 
const mongoURL=process.env.DB_URL


//Setup MongoDB connection
mongoose.connect(mongoURL);
    
    
//Get the default connection
//Mongoose maintains a default connection  object representing the MongoDB connection
const db=mongoose.connection;

//Define event listeners for database connection
db.on('connected',()=>{
    console.log('connected to MongoDB server');
});

db.on('error',(err)=>{
    console.log('could not connect to MongoDB server',err);
});

db.on('disconnected',()=>{
    console.log('disconnected from MongoDB server');
});

//Export the database connection

module.exports=db;
