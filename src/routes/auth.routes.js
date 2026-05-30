const {Router}=require("express");

const authController=require("../controllers/auth.controller")

const authRouter=Router();
// post api to register api/auth/reigister



authRouter.post("./Register",authController.registerUser)

  

module.exports=authRouter
        