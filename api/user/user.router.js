
const userRouter = require('express').Router();
const { userOrders} = require('./user.controller')
userRouter.get('/userOrder', userOrders);




module.exports = userRouter;