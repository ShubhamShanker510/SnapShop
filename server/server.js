require('dotenv').config()
const express=require('express');
const connectDb = require('./database/db');
const app=express();
const userRoute=require('./routers/user-routes')
const homeRoute=require('./routers/home-routes')
const port=process.env.PORT || 3000

app.use(express.json());

app.use('/api/user',userRoute)
app.use('/api/home',homeRoute)


connectDb()
.then(()=>{
    app.listen(port,()=>{
        console.log(`Server is running on port ${port}`)
    })
})
.catch((error)=>{
    console.log("Connection Failed=>", error);
})