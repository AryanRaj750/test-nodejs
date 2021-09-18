import express from 'express';
import userRoute from './userRoute';
import dotenv from 'dotenv';

// const express = require('express');
dotenv.config({
  path: '../config.env',
});
const app = express();
app.use(express.json())
app.use('/app', userRoute);

app.listen(process.env.PORT, () => console.log("Listening to port 3000"));