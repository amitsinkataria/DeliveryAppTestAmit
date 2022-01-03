
var messagebird = require('messagebird')('L6tWFN4Waf0WIkic8m9kVWxzj');
// var otp = Math.floor(Math.random() * 100000 ) + 100000;

module.exports = {

    otpService : (number, callBack)=>{
        console.log(`otp api running for ${number}`)
        messagebird.verify.create(number, {
            template: `your verification id is %token`},
            function(err, res) {
if(err){
    console.log(`request failed!`, err)
    callBack(err)
    return

} else {
    console.log(`success`)
    callBack(null, res)
    return 
}
            })


    }

}

