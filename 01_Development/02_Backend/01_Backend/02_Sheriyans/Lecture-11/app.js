const express = require('express');
const app = express();

const usermodel = require('./usermodel');

app.get('/', (req, res) => {
    res.send("Heyyy this is staring of backend. Let's watch Nomad Shubham Videos and explore the world.");
})

app.get('/create', async (req, res) => {
    let createdUser = await usermodel.create({
        name: "harsh",
        email: "harsh@gmail.com",
        username: "harsh"
    });

    res.send(createdUser);
})

app.get('/seed', async (req, res) => {
    const users = [
        {
            name: "Harsh",
            email: "harsh@gmail.com",
            username: "harsh"
        },
        {
            name: "Ravi Kumar",
            email: "ravi.kumar@gmail.com",
            username: "ravi123"
        },
        {
            name: "Priya Sharma",
            email: "priyaa.sharma@gmail.com",
            username: "priyaaaa123"
        },
        {
            name: "Amit Verma",
            email: "amitvermaa@gmail.com",
            username: "amitVermaa"
        },
        {
            name: "Snehaa Mehtaa",
            email: "sneha.mehta@example.com",
            username: "sneha_m"
        },
        {
            name: "Anuv Jain",
            email: "Anuv.Ji@gmail.com",
            username: "Anuv"
        }
    ];

    try {
        const createdUsers = await usermodel.insertMany(users);
        res.send(createdUsers);
    } catch (err) {
        res.status(500).send("Error creating users: " + err.message);
    }
});

app.get('/update', async (req, res) => {
    let updatedUser = await usermodel.findOneAndUpdate({ username: "harsh" }, {
        name: "Ankit Shaw",
        username: "Ankit",
        email: "ankitshaw@testgmail.com"
    }, { new: true });
    res.send(updatedUser);
});

app.get("/read", async (req, res) => {
    try {
        let users = await usermodel.find({ username: "ravi123" });
        res.send(users);
    } catch (err) {
        res.status(500).send("Error fetching users: " + err.message);
    }
});

app.get("/delete", async (req, res) => {
    try {
        let deletedUser = await usermodel.findOneAndDelete({ username: "Ankit" });
        res.send(deletedUser);
    } catch (err) {
        res.status(500).send("Error deleting user: " + err.message);
    }
});

app.listen(3000);