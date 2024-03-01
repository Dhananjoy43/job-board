import express from "express";
import dotenv from "dotenv";

import connectDB from "./src/db/index.js"

dotenv.config();


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }))

// import routes
import authRoutes from "./src/routes/auth.route.js";

// Route declaration
app.get("/", (req, res) => {
    res.send("Hello World!")
});
app.use("/api/webhooks", authRoutes);



connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`⚙️ Server is running at port : ${process.env.PORT || 8000}`);
        })
    })
    .catch((err) => {
        console.log("MONGO db connection failed !!! ", err);
    })
