const express=require("express");

const app=express();

const cookieParser=require("cookie-parser");

app.use(cookieParser());

app.use(express.json());
// REQUIRE ALL THE ROUTES HERE
const authRouter=require("./routes/auth.routes")



//USING ALL THE ROUTES HERE

app.use("/api/auth",authRouter);







module.exports=app