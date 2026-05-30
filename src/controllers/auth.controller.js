const { JsonWebTokenError } = require("jsonwebtoken");
const userModel=require("../models/user_model");
const bcrypt=require("bcryptjs");

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

module.exports={registerUser}