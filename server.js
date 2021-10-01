import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({path:'./.env'});

const app=express();

const databaseUrl=process.env.DATABASE;
mongoose.connect(databaseUrl,{useNewUrlParser: true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify: false}).then(()=>console.log("Database connected sucessfully"));

app.listen(2021,()=>{

    console.log('Server is running on port 2021');
})

export default app;