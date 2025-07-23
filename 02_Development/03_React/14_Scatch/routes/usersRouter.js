const express = require("express");
const router = express.Router();
const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");

router.get("/", function (req, res) {
  res.send("hey this is usersroute is working");
});

router.post("/register", async function (req, res) {
  try {
    let { email, password, fullname } = req.body;

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    let user = await userModel.create({
      email,
      password: hashedPassword,
      fullname,
    });

    let token = jwt.sign({email, id: user._id}, "KIKIKIKIKIKI")
    res.cookie("token", token);
    res.send("User created successfully....")

    const userResponse = {
      _id: user._id,
      email: user.email,
      fullname: user.fullname,
      password: user.password
    };

    res.status(201).json(userResponse);
  } catch (err) {
    console.log(err.message);
    res
      .status(500)
      .json({ error: "Error registering user", details: err.message });
  }
});

module.exports = router;
