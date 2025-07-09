const express = require('express');
const app = express();
const path = require('path');
const userModel = require('./userModel');

// Set view engine to EJS
app.set("view engine", "ejs");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render("index");
});

app.get('/read', async (req, res) => {
    const allUsers = await userModel.find();
    res.render("read", { users: allUsers });
});

app.get('/delete/:id', async (req, res) => {
    const users = await userModel.findOneAndDelete({ _id: req.params.id });
    res.redirect("/read");
});

app.get('/edit/:id', async (req, res) => {
    const user = await userModel.findById({ _id: req.params.id });
    res.render("edit", { user });
});

app.post('/update/:id', async (req, res) => {
    const { fullname, phone, email, username, image } = req.body;
    await userModel.findByIdAndUpdate(req.params.id, {
        fullname,
        phone,
        email,
        username,
        image
    });
    res.redirect('/read');
});

app.post('/create', async (req, res) => {
    const { fullname, email, phone, username, image } = req.body;

    await userModel.create({
        fullname,
        email,
        phone,
        username,
        image
    });

    res.redirect('/read');
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
