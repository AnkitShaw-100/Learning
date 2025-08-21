const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB using the environment variable
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("MongoDB connection error:", err));

// Define schema
const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String
});

module.exports = mongoose.model("user", userSchema);
