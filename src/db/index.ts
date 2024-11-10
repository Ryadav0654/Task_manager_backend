import mongoose from "mongoose"
const DB_URL = process.env.DB_URI;

const connectDB = async () => {
    try {
        const response = await mongoose.connect(`${DB_URL}`);
        // console.log(
        //     `Database connected: ${response.connection.host}`
        // );
    } catch (error:any) {
        console.error("Database error",error.message);
        process.exit(1);
    }
    
}

export default connectDB;