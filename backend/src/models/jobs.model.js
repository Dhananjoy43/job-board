import mongoose, { Schema } from "mongoose";

const jobSchema = new Schema(
    {
        clerkId: {
            type: String,
            required: true,
            unique: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowecase: true,
            trim: true,
        },
        fullName: {
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




export const Job = mongoose.model("Job", jobSchema)