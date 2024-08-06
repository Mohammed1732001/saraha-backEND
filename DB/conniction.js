import mongoose from "mongoose";

export const connectDB = () => {
    mongoose.connect(process.env.DATA_BASE_URL).then(result => {
        // console.log(result);
        console.log("connectDB");
    }).catch(err => {
        console.log(`Server Down.................. ${err} `);
    })
}