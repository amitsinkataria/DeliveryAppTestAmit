const {pool} = require('../../config/database');

module.exports={
    getUserOrders: (id, callBack)=>{
        pool.query('select * from orders where userID = ?', id, (err, result)=>{
            if(err){
                return callBack(err)
            } else{
                return callBack(null, result)
            }
        })

    }
}