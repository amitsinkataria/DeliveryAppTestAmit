const express = require('express')
const app = express();
const userRouter = require('./api/user/user.router')
const adminRouter = require('./api/admin/admin.router')
const riderRouter = require('./api/rider/rider.router')

app.use(express.json());
app.use(express.urlencoded(), {extended : true});
require('dotenv').config()

app.get('/user', userRouter);
app.get('/admin', adminRouter);
app.get('/rider', riderRouter);

app.get('/api', (req, res)=>{
    res.json({
        success: 1,
        message: `Working`
    })
})

app.listen(process.env.DB_PORT, ()=>{console.log(`listening at ${process.env.DB_PORT}`)})