import express from 'express';
// const express = require('express');

const app = express();
app.use(express.json())
app.get('/test', (req, res) => {
  res.status(200).json({ message: "Welcome to Node.js & Express "});
});

app.listen(3000, () => console.log("Listening to port 3000"));