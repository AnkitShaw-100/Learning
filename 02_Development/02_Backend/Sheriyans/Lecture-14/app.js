// 1. cookie
// 2. bcrypt
// 3. jwt

const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.use(cookieParser())

app.get("/", function (_req, res) {
    res.cookie("name", "Ankit");
    res.send("done");
})

app.get("/read", function (req, res) {
    console.log(req.cookies);
    res.send("Read Page");
})

app.get("/hash", function (_req, _res) {
    bcrypt.genSalt(10, function (_err, salt) {
        bcrypt.hash("Pololololo", salt, function (_err, hash) {
            // Store hash in your Password DB
            console.log("Hash is : ",hash);
        })
    })
})

app.get("/salt", function (_req, _res) {
    bcrypt.genSalt(10, function (_err, salt) {
        console.log("Salt is :",salt);
    })
})

app.get("/result", function(_req, res){
    bcrypt.compare("Pololololo", "$2b$10$0bQ2YrpI1.6YXt6HjvZvRe", function(err, result) {
        if (err) {
            console.error("Error comparing:", err);
            return res.status(500).send("Error comparing password");
        }
        console.log("Result is : ", result);
        res.send("Result is : " + result);
    });
})

// JWT signing route (changed path to avoid duplicate "/")
app.get("/jwt", function(req, res){
    const token = jwt.sign({email:"ankitshaw6933@gmail.com"}, "secretkey");
    res.send("JWT Token: " + token);
});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});