import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    img: { type: String, required: true },
    year: { type: Number, required: true },
    genre: { type: [String], required: true },
    rating: { type: Number, required: true },
    type: { type: String, required: true },
    condition: { type: String, required: true },
    duration: { type: Number, required: true },
});

// Export the model with the correct singular name
const yoga = mongoose.model('yogiji', movieSchema);

export default yoga;
