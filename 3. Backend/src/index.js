import dotenv from 'dotenv'
import mongoose from 'mongoose';
import { DB_NAME } from './constants.js'
import connectDB from './db/index.js';
import { app } from './app.js';

// // Approach 1
// import express from 'express'
// const app = express()

// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log("Error: ",error)
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`)
//         })
//     } catch(error) {
//         console.error("Error: ",error)
//         throw err
//     }
// })()

// Approach 2 - More Professional
dotenv.config({
    path: './env'
})

connectDB()

.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on Port ${process.env.PORT}`)
    })

    app.on("error", (error) => {
        console.log("Error: ",error)
        throw error
    })
})
.catch((err) => {
    console.log(`Mongo DB Connection Failed!!! `,err);
})