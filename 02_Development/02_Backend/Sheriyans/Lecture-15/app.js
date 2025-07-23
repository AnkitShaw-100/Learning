const express = require("express");
const app = express();
const userModel = require("./models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const cookieParser = require("cookie-parser");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/create", async (req, res) => {
    try {
        let { username, email, upassword, age } = req.body;

        // Hashing the password using bcrypt
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(upassword, saltRounds);

        let createdUser = await userModel.create({
            username,
            email,
            password: hashedPassword,
            age
        });

        // Creating JWT token
        const token = jwt.sign(
            { email: createdUser.email, userid: createdUser._id },
            "secret"
        );

        // Setting cookie with the token
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            maxAge: 24 * 60 * 60 * 1000
        });

        res.send("User created successfully and logged in");
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).send("Error creating user");
    }
});

app.get("/login", function(req, res){
    res.render('login');    
})

app.post("/login", async function(req, res){
    try {
        let { email, password } = req.body;
        
        let user = await userModel.findOne({email: email});
        if(!user) return res.send("Something is wrong.. User not found");

        bcrypt.compare(password, user.password, function(err, result){
            if(err) {
                console.error("Error comparing passwords:", err);
                return res.status(500).send("Error during login");
            }
            
            if(result) {
                const token = jwt.sign(
                    { email: user.email, userid: user._id }, 
                    "secret"
                );
                
                res.cookie("token", token, {
                    httpOnly: true,
                    secure: false,
                    maxAge: 24 * 60 * 60 * 1000
                });
                
                res.send("Login successful");
            } else {
                res.send("Something is wrong.. Invalid password");
            }
        });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).send("Error during login");
    }
})

app.get('/logout', function(req, res){
    res.cookie('token', " ");
    res.redirect("/");
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
