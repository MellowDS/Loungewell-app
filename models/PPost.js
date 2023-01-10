// const { Double, Int32 } = require("mongodb");
const mongoose=require("mongoose")

const PostSchema=new mongoose.Schema({
  title:{
    type:String,
    required:true,
  },desc:{
    type:String,
    required:true,
  },photo:{
    type:String,
    required:false,
  },username:{
    type:String,
    required:true,
  },price:{
    type:String,
    required:true,
  },bedroom:{
    type:Number,
    required:true,
  },bathroom:{
    type:Number,
    required:true,
  },area:{
    type:String,
    required:true,
  },pdesc:{
    type:String,
    required:false,
  },email:{
    type:String,
    required:true,
  }
},{timestamps:true});

module.exports=mongoose.model("PPost",PostSchema)