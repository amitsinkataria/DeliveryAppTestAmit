const {pool} = require('../../config/database');

module.exports={
    getRiderTasks: (id, callBack)=>{
        pool.query('select * from tasks where riderID = ?', id, (err, result)=>{
            if(err){
                return callBack(err)
            } else{
                return callBack(null, result)
            }
        })

    }
}