import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"; //  Import constants

// Database connection function
const connectDB =async () =>{

    try{
       const connectionInstance = await mongoose.connect(`${process.env.
        MONGODB_URL}/${DB_NAME}`)

        // Log successful connection
        console.log(`\n MongoDB connected !! DB HOST: ${
            connectionInstance.connection.host
        }`);
       
    }
    catch(error){
      // Log connection error and exit process
      console.log("MONGODB connection error",error);
      process.exit(1)
    }
}
export default connectDB