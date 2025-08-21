const express = require("express");
const router = express.Router();
const isLoggedin = require("../middlewares/isLoggedIn");
const productModel = require("../models/product-model");
const userModel = require("../models/user-model");

router.get("/", function (req, res) {
  res.render("index", {
    error: req.flash("error"),
    success: req.flash("success"),
  });
});

router.get("/shop", isLoggedin, async function (req, res) {
  try {
    let products = await productModel.find();
    res.render("shop", {
      error: req.flash("error"),
      success: req.flash("success"),
      products: products,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    req.flash("error", "Error loading products");
    res.render("shop", {
      error: req.flash("error"),
      success: req.flash("success"),
      products: [],
    });
  }
});

router.get("/products-preview", async function (req, res) {
  try {
    let products = await productModel.find();
    res.render("shop", {
      error: [],
      success: [],
      products: products,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.render("shop", {
      error: ["Error loading products"],
      success: [],
      products: [],
    });
  }
});

router.get("/about", function (req, res) {
  res.render("about", {
    error: req.flash("error"),
    success: req.flash("success"),
  });
});

router.get("/contact", function (req, res) {
  res.render("contact", {
    error: req.flash("error"),
    success: req.flash("success"),
  });
});

router.get("/account", isLoggedin, async function (req, res) {
  try {
    let user = await userModel.findOne({ email: req.user.email });
    res.render("account", {
      error: req.flash("error"),
      success: req.flash("success"),
      user: user,
    });
  } catch (error) {
    console.error("Error fetching user data:", error);
    req.flash("error", "Error loading account information");
    res.redirect("/shop");
  }
});

router.post("/account", isLoggedin, async function (req, res) {
  try {
    const { fullname, contact } = req.body;

    if (!fullname || fullname.length < 3) {
      req.flash("error", "Full name must be at least 3 characters long");
      return res.redirect("/account");
    }

    await userModel.findOneAndUpdate(
      { email: req.user.email },
      {
        fullname: fullname.trim(),
        contact: contact || undefined,
      }
    );

    req.flash("success", "Profile updated successfully!");
    res.redirect("/account");
  } catch (error) {
    console.error("Error updating profile:", error);
    req.flash("error", "Error updating profile. Please try again.");
    res.redirect("/account");
  }
});

router.post("/contact", function (req, res) {
  const { name, email, subject, message } = req.body;

  // Basic validation
  if (!name || !email || !subject || !message) {
    req.flash("error", "All fields are required");
    return res.redirect("/contact");
  }

  // Here you would typically save to database or send email
  console.log("Contact form submission:", { name, email, subject, message });

  req.flash(
    "success",
    "Thank you for your message! We'll get back to you soon."
  );
  res.redirect("/contact");
});

router.get("/logout", isLoggedin, function (req, res) {
  res.cookie("token", "");
  req.flash("success", "Logged out successfully");
  res.redirect("/");
});

// Cart routes
router.post("/add-to-cart", isLoggedin, async function (req, res) {
  try {
    const { productId, quantity = 1 } = req.body;

    if (!productId) {
      return res
        .status(400)
        .json({ success: false, message: "Product ID is required" });
    }

    // Find the product
    const product = await productModel.findById(productId);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    // Check stock
    if (product.stock < quantity) {
      return res
        .status(400)
        .json({ success: false, message: "Insufficient stock" });
    }

    // Find user and update cart
    const user = await userModel.findOne({ email: req.user.email });

    // Check if product already exists in cart
    const existingItemIndex = user.cart.findIndex(
      (item) => item.productId === productId
    );

    if (existingItemIndex > -1) {
      // Update quantity if product already in cart
      const newQuantity = user.cart[existingItemIndex].quantity + quantity;
      if (newQuantity > product.stock) {
        return res
          .status(400)
          .json({
            success: false,
            message: "Cannot add more items than available stock",
          });
      }
      user.cart[existingItemIndex].quantity = newQuantity;
    } else {
      // Add new item to cart
      user.cart.push({
        productId: productId,
        name: product.name,
        price: product.price,
        discount: product.discount || 0,
        image: product.image,
        quantity: quantity,
        addedAt: new Date(),
      });
    }

    await user.save();

    res.json({
      success: true,
      message: `${product.name} added to cart successfully!`,
      cartCount: user.cart.length,
      cartItems: user.cart,
    });
  } catch (error) {
    console.error("Error adding to cart:", error);
    res
      .status(500)
      .json({ success: false, message: "Error adding product to cart" });
  }
});

router.get("/cart", isLoggedin, async function (req, res) {
  try {
    const user = await userModel.findOne({ email: req.user.email });
    res.render("cart", {
      error: req.flash("error"),
      success: req.flash("success"),
      cartItems: user.cart || [],
      user: user,
    });
  } catch (error) {
    console.error("Error fetching cart:", error);
    req.flash("error", "Error loading cart");
    res.redirect("/shop");
  }
});

router.post("/remove-from-cart", isLoggedin, async function (req, res) {
  try {
    const { productId } = req.body;

    const user = await userModel.findOne({ email: req.user.email });
    user.cart = user.cart.filter((item) => item.productId !== productId);

    await user.save();

    res.json({
      success: true,
      message: "Item removed from cart",
      cartCount: user.cart.length,
    });
  } catch (error) {
    console.error("Error removing from cart:", error);
    res
      .status(500)
      .json({ success: false, message: "Error removing item from cart" });
  }
});

router.post("/update-cart-quantity", isLoggedin, async function (req, res) {
  try {
    const { productId, quantity } = req.body;

    if (quantity < 1) {
      return res
        .status(400)
        .json({ success: false, message: "Quantity must be at least 1" });
    }

    const user = await userModel.findOne({ email: req.user.email });
    const cartItemIndex = user.cart.findIndex(
      (item) => item.productId === productId
    );

    if (cartItemIndex === -1) {
      return res
        .status(404)
        .json({ success: false, message: "Item not found in cart" });
    }

    // Check stock
    const product = await productModel.findById(productId);
    if (quantity > product.stock) {
      return res
        .status(400)
        .json({ success: false, message: "Insufficient stock" });
    }

    user.cart[cartItemIndex].quantity = quantity;
    await user.save();

    res.json({
      success: true,
      message: "Cart updated successfully",
      cartItems: user.cart,
    });
  } catch (error) {
    console.error("Error updating cart:", error);
    res.status(500).json({ success: false, message: "Error updating cart" });
  }
});

router.get("/cart-count", isLoggedin, async function (req, res) {
  try {
    const user = await userModel.findOne({ email: req.user.email });
    const cartCount = user.cart ? user.cart.length : 0;
    res.json({ cartCount });
  } catch (error) {
    res.json({ cartCount: 0 });
  }
});

module.exports = router;
