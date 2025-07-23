const express = require("express");
const bcrypt = require("bcrypt"); 
const router = express.Router();
const ownerModel = require("../models/owners-model");

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

module.exports = router;
