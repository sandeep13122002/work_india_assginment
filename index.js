import express from "express";
import { PrismaClient } from '@prisma/client';
import bodyParser from 'body-parser';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import adminAuth from "./middleware/adminAuth.js";
import userAuth from "./middleware/userAuth.js";
import authRoute from "./routes/auth.route.js";
import serviceRoute from "./routes/service.route.js"
dotenv.config();

const app=express();
app.use(express.json());
app.use(cookieParser());
const prisma = new PrismaClient();


app.use("/auth",authRoute);
app.use("/service",serviceRoute);
app.get("/",(req,res)=>{
    res.send(req.header('api'));
});


app.listen(5000,()=>{
    console.log("Server is running on port 5000");
});