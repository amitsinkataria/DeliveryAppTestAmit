const {pool} = require('../../config/database')




module.exports = {

    getAdminOrders : (callBack)=>{
        pool.query('select * from orders where riderID = null', [], (err, result)=>{
            if(err){
                return callBack(err);
            } else{
                return callBack(null, result)
            }
        })
    }
}