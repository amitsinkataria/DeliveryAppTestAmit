
const riderRouter = require('express').Router();
const {checkToken} = require("../../auth/auth_token_validation")
const {riderTasks} = require('./rider.controller')

riderRouter.get('/riderTasks', checkToken, riderTasks)

module.exports = riderRouter;