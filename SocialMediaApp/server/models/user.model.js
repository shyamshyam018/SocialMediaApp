import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    username : {
        type : String , 
        required : true ,
        unique : true , 
        min : 3 , 
    },
    email : {
        type : String , 
        required : true , 
    },
    password : {
        type : String ,
        required : true , 
    },
    profilePicture : {
        type : String , 
        default :  "" , 
    },
    coverPicture : {
        type : String , 
        default : ""
    },
    isAdmin : {
        type : Boolean , 
        default : false ,
    }
});

export default mongoose.model("User",userSchema);