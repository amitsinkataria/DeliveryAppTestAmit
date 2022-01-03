const {otpService} = require('./phoneAuth.service')


module.exports = {
    getOtp : (req, res)=>{
        console.log(`otp api working!`)
var number = req.body.number
        otpService(number, (err, result)=>{
            if(err){
                console.log(`verification failed`)
            } else {
                res.json({
                    success: 1,
                    message: result
                })
            }
        })
    }


}