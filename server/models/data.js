import mongoose from "mongoose";

const mongo_schema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    age: { type: Number, required: true },
    setlocation: { type: String, required: true },
    phonenumber: { type: String, required: true },
});

const yogadetails = mongoose.model('yogadetails', mongo_schema);

export default yogadetails;