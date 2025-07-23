const mongoose = require("mongoose");

// Use environment variable or fallback to local MongoDB
const mongoURI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/scatch";

mongoose
  .connect(mongoURI)
  .then(function () {
    console.log("Connected to MongoDB");
  })
  .catch(function (err) {
    console.log("MongoDB connection error:", err);
  });

module.exports = mongoose.connection;
