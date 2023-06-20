import mongoose from 'mongoose';

const { Schema } = mongoose;

// Define the user schema
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// Create the User model
const User = mongoose.model('User', userSchema);

export default User;
