var jwt = require('jsonwebtoken');
module.exports=(req,res,next)=>{
    
    try{
        var token=req.headers.authorization.split(" ")[1];
       // console.log(token);
       var decode= jwt.verify(token, 'secret');
       req.userData=decode;
    next();
    }catch(error){
        res.status(401).json({
            error:"Invalid Token"
        });
    }

}