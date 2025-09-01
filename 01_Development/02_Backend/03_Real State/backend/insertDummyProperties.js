import mongoose from "mongoose";
import Property from "./src/models/Property.js";
import User from "./src/models/User.js";
import dotenv from "dotenv";
dotenv.config();

// Replace with a real user ID from your database (owner field is required)
const OWNER_ID = "<PUT_A_VALID_USER_ID_HERE>";

const dummyProperties = [
  {
    title: "Modern Apartment in City Center",
    description: "A beautiful 2-bedroom apartment in the heart of the city.",
    price: 120000,
    location: "Downtown",
    images: ["/images/exterior/image1.jpg"],
    owner: OWNER_ID,
  },
  {
    title: "Spacious Family House",
    description: "Perfect for families, with a large backyard and garage.",
    price: 250000,
    location: "Suburbs",
    images: ["/images/exterior/image2.jpg"],
    owner: OWNER_ID,
  },
  {
    title: "Luxury Villa with Pool",
    description: "A stunning villa with a private pool and garden.",
    price: 750000,
    location: "Beverly Hills",
    images: ["/images/exterior/image3.jpg"],
    owner: OWNER_ID,
  },
];

async function insertDummyProperties() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    // Check if OWNER_ID is valid
    const owner = await User.findById(OWNER_ID);
    if (!owner) {
      throw new Error(
        "Please set OWNER_ID to a valid user ID from your database."
      );
    }

    await Property.insertMany(dummyProperties);
    console.log("Dummy properties inserted!");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

insertDummyProperties();
