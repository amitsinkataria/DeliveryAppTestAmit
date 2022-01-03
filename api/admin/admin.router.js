
const adminRouter = require('express').Router();
const { newAdminOrder} = require('./admin.controller')

    adminRouter.get('/getNewOrder', newAdminOrder ) 

module.exports = adminRouter
