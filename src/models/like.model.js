import mongoose, { Schema } from "mongoose";

const likeSchema = new mongoose.Schema({
    video:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Video'
    },
    comment:{
        type:Schema.Types.ObjectId,
        ref:"Comment"
    },
   tweet:{
        type:Schema.Types.ObjectId,
        ref:"Tweet"
    },
    likedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },

},{timestamps:true})

export const Like = mongoose.model('Like',likeSchema)