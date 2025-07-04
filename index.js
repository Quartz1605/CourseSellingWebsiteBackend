import express from "express"; 
import mongoose from "mongoose";
import { userRouter } from "./routes/user.js";
import { adminRouter } from "./routes/admin.js";
import { coursesRouter } from "./routes/courses.js";
import dotenv from "dotenv"
dotenv.config()// Yeh ek hi baar karna padta hai no need to do baar baar.


mongoose.connect(process.env.MONGO_URL)

//  We are using it as a middleware in here,.use() hai yaad rakhna.

const app = express();

app.use(express.json());


app.use("/user",userRouter)

app.use("/admin",adminRouter)

app.use("/",coursesRouter)


app.get("/",(req,res) => {
  res.send("hi user");
})



app.listen(3000,() => {
  console.log(`http://localhost:3000/`)
})