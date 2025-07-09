const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("MongoDB connection error:", err));

// Define schema
const userSchema = mongoose.Schema({
    fullname: String,
    username: String,
    email: String,
    phone: String,
    image: String
});

module.exports = mongoose.model("user", userSchema);
