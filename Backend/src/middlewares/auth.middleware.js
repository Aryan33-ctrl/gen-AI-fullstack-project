const jwt=require("jsonwebtoken");
const blacklistModel=require("../models/blacklist_models");


 async function authUser(req,res,next){
    const token=req.cookies.token;
    if(!token){
        return res.status(401).json({messege:"token not provided"});
    }

    const isTokenBlacklisted=await blacklistModel.findOne({token});

    if(isTokenBlacklisted){
        return res.status(401).json({messege:"token is blacklisted"});
    }
    try{
    const decoded=jwt.verify(token,process.env.JWT_SECRET);
    req.user=decoded
    next();
    }
    catch(err){
        return res.status(401).json({messege:"invalid token"});
    }
}

module.exports={authUser};

