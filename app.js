const express = require('express')
const app = express();
const userRouter = require('./api/user/user.router')
const adminRouter = require('./api/admin/admin.router')
const riderRouter = require('./api/rider/rider.router')
const phoneRouter = require('./api/Phone-auth/phoneAuth.router')

app.use(express.json());
require('dotenv').config()


app.use("/user", userRouter);
app.use('/admin', adminRouter);
app.use('/rider', riderRouter);
app.use('/otp', phoneRouter);

app.get('/api', (req, res)=>{
    res.json({
        success: 1,
        message: `Working`
    })
})

app.listen(process.env.DB_PORT, ()=>{console.log(`listening at ${process.env.DB_PORT}`)})