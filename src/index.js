import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js"; 

dotenv.config({                
     path: './.env'
})
connectDB() 
.then(()=>{
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`Server is running at port:${process.env.PORT}`);
    })

})
.catch((err)=>{
    console.log("MONGO db connection failed !",err);

}) 

 //The dotenv.config() function is crucial for loading environment variables from a .env file into your Node.js application's process.env. 
//2nd approach - take different file here is(index.js  in db) and import from there
//in index and execute












/*function connectDB(){}      // this can be use we r using ifis 
 connectDB()
*/


// 1st approach - sara code index file me likhna 
/*(async()=>{
    try{
       await mongoose.connect(`${process.env.
        MONGODB_URL}/${DB_NAME}`)
            app.on("error",(error)=>{
                console.log("ERRR: ",error);
                throw error
            })
            app.listen(process.env.PORT,()=>{
                console.log(`App is listening on port ${
                    process.env.PORT
                }`);
            })
    }
    catch(error){
        console.error("ERROR: ",error)
        throw err
    }
})()
    */

