import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: { type: String, required: true },
    school_name: { type: String, required: true },
    video_links: [
        {
            url: String
        }
    ],
    topics: [
        {
            name: String,
            description: String,
            filename: String,  
            filepath: String 
        }
    ]
});

export const User = mongoose.model('User', userSchema);

