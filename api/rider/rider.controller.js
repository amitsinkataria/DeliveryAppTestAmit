const { getRiderTasks} =require('./rider.service');



module.exports = {

    riderTasks : (req, res)=>{
        
        getRiderTasks((err, results)=>{
            if(err) {
                console.log(`no task available`);
                return;
            }
            else {
                res.json({
                    success: 1,
                    message: results
                })
            }
    
        })
    }
}