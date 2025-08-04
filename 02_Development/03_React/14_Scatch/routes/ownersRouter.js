const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const ownerModel = require("../models/owners-model");
const productModel = require("../models/product-model");
const fs = require("fs");
const path = require("path");

router.get("/", function (req, res) {
  res.send("hey this owners route is working");
});

router.post("/create", async function (req, res) {
  try {
    let owners = await ownerModel.find();

    if (owners.length > 0) {
      return res
        .status(403)
        .send("You don't have permission to create a new owner.");
    }

    let { fullname, email, password, gstin } = req.body;

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    let createdOwner = await ownerModel.create({
      fullname,
      email,
      password: hashedPassword,
      gstin,
    });

    res.status(201).send(createdOwner);
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong while creating owner.");
  }
});

router.get("/seed-products", async function (req, res) {
  try {
    await productModel.deleteMany({});

    const sampleProducts = [
      {
        imagePath: "1bag.png",
        name: "Premium Leather Tote Bag",
        price: 2499,
        discount: 15,
        bgcolor: "#f8f4e6",
        panelColor: "#ffffff",
        textcolor: "#2d3748",
        description:
          "Elegant leather tote bag perfect for work and casual outings. Spacious interior with multiple compartments.",
        category: "Bags",
        stock: 25,
      },
      {
        imagePath: "2bag.png",
        name: "Classic Messenger Bag",
        price: 1899,
        discount: 10,
        bgcolor: "#e6f3ff",
        panelColor: "#f7fafc",
        textcolor: "#2a4365",
        description:
          "Stylish messenger bag with adjustable strap and premium finish. Perfect for professionals.",
        category: "Bags",
        stock: 18,
      },
      {
        imagePath: "3bag 1.png",
        name: "Modern Backpack",
        price: 3299,
        discount: 20,
        bgcolor: "#f0fff4",
        panelColor: "#ffffff",
        textcolor: "#22543d",
        description:
          "Contemporary backpack with laptop compartment and water-resistant material.",
        category: "Bags",
        stock: 30,
      },
      {
        imagePath: "4bag.png",
        name: "Vintage Travel Bag",
        price: 4599,
        discount: 25,
        bgcolor: "#fef5e7",
        panelColor: "#fffaf0",
        textcolor: "#744210",
        description:
          "Vintage-style travel bag with durable construction and classic design elements.",
        category: "Bags",
        stock: 12,
      },
      {
        imagePath: "5bag.png",
        name: "Compact Satchel",
        price: 1599,
        discount: 0,
        bgcolor: "#f7fafc",
        panelColor: "#edf2f7",
        textcolor: "#2d3748",
        description:
          "Compact satchel bag ideal for daily essentials. Lightweight and versatile design.",
        category: "Bags",
        stock: 22,
      },
      {
        imagePath: "6bag.png",
        name: "Executive Briefcase",
        price: 5999,
        discount: 30,
        bgcolor: "#1a202c",
        panelColor: "#2d3748",
        textcolor: "#ffffff",
        description:
          "Professional briefcase with premium leather finish and secure locking mechanism.",
        category: "Bags",
        stock: 8,
      },
      {
        imagePath: "7bag.png",
        name: "Casual Shoulder Bag",
        price: 1299,
        discount: 5,
        bgcolor: "#fef2f2",
        panelColor: "#fff5f5",
        textcolor: "#742a2a",
        description:
          "Trendy shoulder bag perfect for casual outings and everyday use.",
        category: "Bags",
        stock: 35,
      },
      {
        imagePath: "image 80.png",
        name: "Designer Handbag",
        price: 3899,
        discount: 18,
        bgcolor: "#f7fafc",
        panelColor: "#edf2f7",
        textcolor: "#4a5568",
        description:
          "Elegant designer handbag with premium materials and sophisticated styling.",
        category: "Bags",
        stock: 15,
      },
    ];

    const createdProducts = [];
    for (const product of sampleProducts) {
      try {
        const imagePath = path.join(
          __dirname,
          "../public/images",
          product.imagePath
        );
        const imageBuffer = fs.readFileSync(imagePath);
        const base64Image = imageBuffer.toString("base64");

        const newProduct = await productModel.create({
          image: base64Image,
          name: product.name,
          price: product.price,
          discount: product.discount,
          bgcolor: product.bgcolor,
          panelColor: product.panelColor,
          textcolor: product.textcolor,
          description: product.description,
          category: product.category,
          stock: product.stock,
        });

        createdProducts.push(newProduct);
      } catch (imageError) {
        console.error(
          `Error processing image ${product.imagePath}:`,
          imageError
        );
      }
    }

    res.json({
      message: `Successfully created ${createdProducts.length} products!`,
      products: createdProducts.map((p) => ({
        name: p.name,
        price: p.price,
        discount: p.discount,
        stock: p.stock,
      })),
    });
  } catch (error) {
    console.error("Error seeding products:", error);
    res.status(500).json({
      error: "Failed to seed products",
      details: error.message,
    });
  }
});

module.exports = router;
