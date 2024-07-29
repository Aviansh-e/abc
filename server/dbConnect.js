import mongoose from "mongoose";

const dbConnect = async () => {
    const url = `mongodb+srv://${username}${passward}@cluster0.qvygiba.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    try {
        await mongoose.connect(url);
        console.log("MongoDB connected successfully");
    } catch (err) {
        console.error("MongoDB not connected successfully", err);
    }
};

export default dbConnect;
