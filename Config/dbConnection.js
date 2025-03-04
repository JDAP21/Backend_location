import mongoose from "mongoose";
// import dotenv from "dotenv";
import { config } from "dotenv";

config();

// Load .env file
// dotenv.config({ path: "./.env" });

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URL, {
        dbName: "HOSPITAL",
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    })
    .then(() => console.log("Database Connected!!"))
    .catch((err) => console.log(`Database Not Connected!! ${err}`));
};
