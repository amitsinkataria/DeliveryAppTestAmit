const {verify} = require("jsonwebtoken")

module.exports = {

    checkToken: (req, res, next) =>{
            let token = req.get("authorization");
            if(token) { 
                token= token.slice(7);
                verify(token, "qwe1234", (err, decoded)=>{
                        if(err){
                            res.json({
                            success: 0,
                            message: "invalid"
                            })
                        } else {
                            next();
                        }
                })

            } else
            {
                res.json({
                    success:0,
                    message:"access denied!! Unauthorised user!!"
                })
            }
    }
}