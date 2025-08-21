const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../utils/generateTokens");

module.exports.registerUser = async function (req, res) {
  try {
    let { email, password, fullname } = req.body;

    // Adding  Validation
    if (!email || !password || !fullname) {
      req.flash("error", "All fields are required");
      return res.redirect("/");
    }

    let user = await userModel.findOne({ email: email });

    if (user) {
      req.flash(
        "error",
        "You already have an account, please use another email"
      );
      return res.redirect("/");
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Creating the user with hashed password
    user = await userModel.create({
      email,
      password: hashedPassword,
      fullname,
    });

    let token = generateToken(user);
    res.cookie("token", token);

    req.flash("success", "Account created successfully! Welcome!");
    res.redirect("/shop");
  } catch (err) {
    console.error("Registration error:", err.message);
    req.flash("error", "Error creating account. Please try again.");
    res.redirect("/");
  }
};

module.exports.loginUser = async function (req, res) {
  try {
    let { email, password } = req.body;

    // Adding validation
    if (!email || !password) {
      req.flash("error", "Email and password are required");
      return res.redirect("/");
    }

    let user = await userModel.findOne({ email: email });
    if (!user) {
      req.flash("error", "Email or password incorrect");
      return res.redirect("/");
    }

    bcrypt.compare(password, user.password, function (err, result) {
      if (err) {
        req.flash("error", "Login error. Please try again.");
        return res.redirect("/");
      }

      if (result) {
        let token = generateToken(user);
        res.cookie("token", token);
        req.flash("success", `Welcome back, ${user.fullname}!`);
        res.redirect("/shop");
      } else {
        req.flash("error", "Email or password is incorrect");
        res.redirect("/");
      }
    });
  } catch (err) {
    console.error("Login error:", err.message);
    req.flash("error", "Login error. Please try again.");
    res.redirect("/");
  }
};

module.exports.logout = function (req, res) {
  res.cookie("token", "");
  res.redirect("/");
};
