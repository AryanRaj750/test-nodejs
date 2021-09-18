import express from 'express';
import userRoute from './userRoute';
// const express = require('express');

const app = express();
app.use(express.json())
app.use('/app', userRoute);

app.listen(3000, () => console.log("Listening to port 3000"));