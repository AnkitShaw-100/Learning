const mongoose = require("mongoose");

const mongoURI = process.env.MONGODB_URI;

mongoose
  .connect(mongoURI)
  .then(function () {
    console.log("Connected to MongoDB");
  })
  .catch(function (err) {
    console.log("MongoDB connection error:", err);
  });

module.exports = mongoose.connection;
