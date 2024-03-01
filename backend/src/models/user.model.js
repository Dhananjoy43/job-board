import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        clerkId: {
            type: String,
            required: true,
            unique: true,
            index: true
        },
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
        },
        avatar: {
            type: String,
        },
    },
    {
        timestamps: true
    }
)

export const User = mongoose.model("User", userSchema)