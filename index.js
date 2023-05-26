const express=require('express');
const app=express();

const port=8000;
const mongoose=require('./config/mongoose');

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(express.text());
app.use(express.json({ type: "application/json" }));

app.use('/',require('./routes/index.js'))

app.listen(port,(err)=>{
    if(err){console.log(`eror in listening to ${port}`);}

    console.log(`app running on port ${port}`);
});
