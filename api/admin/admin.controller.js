
const {getAdminOrders} = require('./admin.service')

module.exports = {
    newAdminOrder : (req,res)=>{

        getAdminOrders((err, result)=>{
if(err){
    console.log(`no order`)
return } else {
    res.json({
        success: 1,
        data: result
    })
}
        })
    }

}