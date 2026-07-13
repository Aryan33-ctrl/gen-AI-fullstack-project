const { JsonWebTokenError } = require("jsonwebtoken");
const userModel=require("../models/user_model");
const bcrypt=require("bcryptjs");
const blacklistModel=require("../models/blacklist_models");
const jwt=require("jsonwebtoken");




 async function registerUser(req,res){

    const {Username,email,password}=req.body;

    if(!Username||!email||!password){
        return res.status(400).json({
            messege:"please provide Username email and password"
        })
    }

    const isUseralreadyExist=await userModel.findOne({
        $or:[{Username},{email}]
    })

    if(isUseralreadyExist){
        return res.status(400).json({
            messege:"account already exsist with this email address or username"
        })
    }


    const hash=await bcrypt.hash(password,10);

    const user=await userModel.create({
        Username,
        email,
        password:hash
    })

    const token=jwt.sign({
        id:user._id,Username:user.Username},
        process.env.jwt_secret,
        {expiresIn:"1d"}
    
    )

    res.cookie("token",token);

    res.status(201).json({
        messege:"user registered successfully",
        user:{
            id:user._id,
            Username:user.Username,
            email:user.email
        }
    })






}



  /**
   * @name loginUserController
   * @description login a user ,expects email and password in the request body
   * @access public
   */
   async function loginUserController(req,res){
    const {email,password}=req.body;

    const user=await userModel.findOne({email});

    if(!user){
        return res.status(400).json({
            messege:"invalid email or password"
        })
    }
    const isPasswordValid=await bcrypt.compare(password,user.password);

    if(!isPasswordValid){
        return res.status(400).json({
            messege:"invalid email or password"
        })
    }   const token=jwt.sign(
        {id: user._id,username:user.username},
        process.env.jwt_secret,
        {expiresIn:"1d"}
    )
    res.cookie("token",token);

    res.status(200).json({
    messege:"user loggedIn successfully",
    user:{
        id:user._id,
        username:user.username,
        email:user.email
    }
 })
}


/**
 * @name logoutUserController
 * @description logout a user by clearing the token cookie
 * @access public
 */
async function logoutUserController(req,res){
    const token=req.cookies.token;
    if(token){
       await  blacklistModel.create({token});

    }
    res.clearCookie("token");
    res.status(200).json({
        messege:"user logged out successfully"
    })
}




module.exports={registerUser, loginUserController, logoutUserController}