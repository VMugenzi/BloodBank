import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./Server/Routes/userRoute";
import bodyParser from "body-parser";
import hospitalRouter from "./Server/Routes/hospitalRoute";
import donationRouter from "./Server/Routes/donationRoute";



dotenv.config({path:'./.env'});

const app=express();
app.use(bodyParser.json());

app.use("/bloodbank/v1/user",userRouter);
app.use("/bloodbank/v1/hospital", hospitalRouter);
app.use("/bloodbank/v1/donation", donationRouter);


const databaseUrl=process.env.DATABASE;
mongoose.connect(databaseUrl,{useNewUrlParser: true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify: false}).then(()=>console.log("Database connected sucessfully"));

const port= process.env.PORT;
app.listen(port,()=>{

    console.log(`Server is running on port ${port}`);
})

export default app;