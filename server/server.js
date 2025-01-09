import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import mongoose from "mongoose";




const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;


cors({
    origin:process.env.CLIENT_URL,
    methods: ["GET","POST","DELETE","PUT"],
    allowedHeaders: ["Content-Type","Authorization"],
});

app.use(express.json());

//database connection

mongoose
.connect(MONGO_URI)
.then(()=>console.log('mongodb is connected'))
.catch((e) => console.log(e));


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})

