const mongoose=require ("mongoose");

const blacklistSchema=new mongoose.Schema({
    token:{
        type:String,
        required :[true,"token is required to add in blacklist"],


    }
},{
    timestamps:true
})

const blacklistModel=mongoose.model("blacklisttokens",blacklistSchema)


module.exports=blacklistModel;