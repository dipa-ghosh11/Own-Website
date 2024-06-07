
import mongoose from "mongoose";
import {DB_NAME} from "./constants";
import express from "express";
























// 1st approach to connect database

/*
const app =express();
// iffe : immediate execution required

(async () =>{
    try{
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        app.on("error", (error) =>{
            console.log("ERROR: ", error);
            throw error
        })

        app.listen(process.env.PORT, ()=> {
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    }

    catch(error){
        console.log("ERROR: ", error);
    }
}

)()
*/