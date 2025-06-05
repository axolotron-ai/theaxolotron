import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();

const uri = "mongodb+srv://test_user:DLZJ3p1hfvWXIOdK@clusterfd.zchu2hz.mongodb.net/?retryWrites=true&w=majority&appName=ClusterFD";

export default function connect() {
    mongoose.connect(uri)
        .then(() => console.log("✅ Connected to MongoDB Atlas"))
        .catch(err => console.error("❌ Connection error:", err));

    return;
};
