import express from 'express';
import userRoute from './userRoute';
import dotenv from 'dotenv';
dotenv.config();
// const express = require('express');

console.log(process.env.DEL)
const app = express();
app.use(express.json())
app.get('/', (req, res) =>{
  res.json({message: "ok tested!!!"})
})
app.use('/app', userRoute);
console.log(process.env.PORT)
app.listen(process.env.PORT || 5000, () => console.log(`Listening to port ${process.env.PORT}`));