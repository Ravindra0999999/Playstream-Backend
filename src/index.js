import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})
connectDB()


// connect of database
//2nd app - take dif.file and import from there
//in index and exwcute












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

