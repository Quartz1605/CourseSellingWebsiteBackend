import express from "express";
import { verifyToken } from "../middlewares/middleware.js";
import { CourseModel } from "../db.js";


const coursesRouter = express.Router();




coursesRouter.get("/purchase",(req,res) => {

  
  
  
})

coursesRouter.get("/courses",verifyToken,async(req,res) => {

  try{

    const courses = await CourseModel.find({}) //to get all the entries.

    if(courses){

      res.status(200).json({"courses" : courses})

    }else{
      res.status(400).json({"message" : "No courses found, Backend error"})
    }

  }catch(e){
    res.status(400).json({"message" : " backend error fucked up."})
  }



  
 
})

export {coursesRouter}





