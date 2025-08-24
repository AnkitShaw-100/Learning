import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import errorHandler from "./middleware/errorMiddleware.js";
import cors from "cors"; // Corrected import for CORS
dotenv.config();
connectDB();

const app = express();
app.use(cors()); // Corrected usage of CORS middleware
app.use(express.json());
app.use("/api/users", userRoutes);
app.use(errorHandler);


app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
