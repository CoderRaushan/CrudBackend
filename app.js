import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import userRoute from "./routes/userRoute.js";
dotenv.config();
const app=express();
app.use(userRoute);
app.use(express.json());
app.use(cors("http://localhost:5173"));
const port=process.env.PORT;
const mongodbrui=process.env.mongodburi;
mongoose.connect(mongodbrui).then(()=>
{
console.log("MongoDb connected successfully!");
}).catch((error)=>
{
    console.log("MongoDb connection error!");
})
app.use("/api",userRoute);

app.listen(port,()=>{
    console.log(`app is listening at port:http://localhost:${port}`);
});