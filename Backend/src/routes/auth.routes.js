const {Router}=require("express");

const authController=require("../controllers/auth.controller")
const authMiddleware=require("../middlewares/auth.middleware")
const authRouter=Router();
// post api to register api/auth/reigister



authRouter.post("/register",authController.registerUser);



/**
 * @route POST /api/auth/login
 * @description login a user with email and password
 * @access public
 */
 authRouter.post("/login",authController.loginUserController);



 /**
 * @route GET /api/auth/logout
 * @description logout a user by clearing the token cookie
 * @access public
 */
authRouter.get("/logout",authController.logoutUserController);



/**
 * @route GET /api/auth/get-me
 * @description get the profile of the logged in user
 * @access private 
 */
authRouter.get("/get-me",authMiddleware.authUser,authController.getMeController);

module.exports=authRouter
        