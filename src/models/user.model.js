import mongoose ,{Schema} from mongoose;
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        
    },
    fullname:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    avatar:{
        type:String, // cloudnary url
        required:true,
    },
    coverImage:{
        type:String, // cloudnary url
    },
    watchHistory:[
        {
            type: Schema.Types.ObjectId,
            ref:"Video"
        }
        
    ],
    refreshToken:{
        type:String
    }
},
{
    timestamps:true,
}

)
////    th password now encrypted
userSchema.pre("save",async function (next){
    if(!this.isModified("password")) return next();
    this.password = bcrypt.hash(this.password,10)
    next()
})

//    password verification
userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken = function(){
    const token= jwt.sign(
        {
            _id:this._id,
            email:this.email,
            username:this.username,
            fullName:this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }


         
    );
    console.log("Generated Access Token:", token);  // Log the access token
    return token;
};

userSchema.methods.generateRefreshToken = function(){
    const token = jwt.sign(
        {
            _id:this._id,
            email:this.email,
            username:this.username,
            fullName:this.fullName
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }

         
    );
    console.log("Generated Refresh Token:", token);  // Log the refresh token
    return token;
};
export const User = mongoose.model("User",userSchema)