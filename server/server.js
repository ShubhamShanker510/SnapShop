require('dotenv').config()
const express=require('express');
const connectDb = require('./database/db');
const cors=require('cors')
const app=express();
const userRoute=require('./routers/user-routes')
const homeRoute=require('./routers/home-routes')
const cartRoute=require('./routers/cart-routes')
const port=process.env.PORT || 3000

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true  
  }));
  

app.use('/api/user',userRoute)
app.use('/api/home',homeRoute)
app.use('/api/cart',cartRoute)


connectDb()
.then(()=>{
    app.listen(port,()=>{
        console.log(`Server is running on port ${port}`)
    })
})
.catch((error)=>{
    console.log("Connection Failed=>", error);
})