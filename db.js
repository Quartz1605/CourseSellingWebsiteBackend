import mongoose from "mongoose";


const Schema = mongoose.Schema;

const User = new Schema({
  
  name : String,
  email : {type : String,unique : true},
  password : String,
  age : Number,

})

const Admin = new Schema({
  name : String,
  email : {type : String,unique : true},
  password : String,
  age : Number,
})

const Course = new Schema({

  creatorId : Schema.ObjectId,
  title : String,
  description : String,
  price : Number,
  imageUrl : String,

})

const Purchase = new Schema({

  name : String,
  courseId : Schema.ObjectId,
  userId : Schema.ObjectId,

})

//Course content ka ek aur table bhi banasakte ho aap.

const UserModel = mongoose.model("UserModel",User)

const AdminModel = mongoose.model("AdminModel",Admin)

const CourseModel = mongoose.model("CourseModel",Course)

const PurchasesModel = mongoose.model("PurchasesModel",Purchase)


export {UserModel,AdminModel,CourseModel,PurchasesModel}