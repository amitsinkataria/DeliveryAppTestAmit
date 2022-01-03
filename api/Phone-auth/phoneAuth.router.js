const phoneRouter = require('express').Router();
const {getOtp} = require('./phoneAuth.controller')



phoneRouter.post('/verify', getOtp)


module.exports = phoneRouter;