
const userRouter = require('express').Router();
const { userOrders} = require('./user.controller')
userRouter.get('/userOrder', userOrders);


userRouter.get('/getUserOrders', userOrders)

module.exports = userRouter;