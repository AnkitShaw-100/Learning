import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number
}

const connection: ConnectionObject = {}

async function dbConnect(): Promise<void> {
    if (connection.isConnected === 1) {
        console.log("Already connected to database");
        return;
    }
    if (!process.env.MONGODB_URI) {
        console.error("MONGODB_URI not found in enviroment variables.");
        process.exit(1);
    }
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || '', {})

        connection.isConnected = db.connections[0].readyState
        if (connection.isConnected === 1) {
            console.log("✅ Database connected successfully!");
        } else {
            console.log("⚠️ Database connected but not in ready state.");

        }
    }
    catch (error) {
        console.error("❌ Database connection failed:", error);
        process.exit(1);
    }
}

export default dbConnect;