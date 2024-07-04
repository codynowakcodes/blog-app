import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://codynowak:blogapp@cluster0.mqqybu7.mongodb.net/blog-app')
    console.log('DB Connected')
}