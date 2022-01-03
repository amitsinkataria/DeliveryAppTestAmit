const { getUserOrders } = require('./user.service');

module.exports = {
    userOrders : (req, res)=>{
        const id = req.body.id
        getUserOrders(id, (err, results)=>{
            if(err) { 
console.log(`no orders found`)
res.json({
    success: 0,
    data: err
}) }
else{
    res.json({
        success: 1,
        data: results
    })
}})
    }

}