/*

const notes = require('./notes.js');
console.log('Server file is available');

var age = notes.age;
var result = notes.addNumber(age + 10, 10);
console.log(age);
console.log("Result is : " + result); 

*/

/*

const objectToConvert = {
    name: "Alice",
    age: 25
};

const json = JSON.stringify(objectToConvert); // Converts object to JSON String
console.log(json);

console.log(typeof json); 

*/

/*

const express = require('express')
const app = express();

app.get('/', function(req, res){
    res.send('Welcome to my hotel.... How i can help you !');
})

app.get('/kitchen', function(req, res){
    res.send('Welcome to my hotels kitchen.... How i can help you !');
})

app.listen(3000); 

*/

const mongoose = require('mongoose');

const mongoURL = 'mongodb+srv://ankitshaw6933:ankitshaw6933@cluster1.jlfp7li.mongodb.net/';

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connected to MongoDB");

    const userSchema = new mongoose.Schema({
        name: String,
        age: Number
    });

    const User = mongoose.model('User', userSchema);

    const users = [
        { name: 'Ravi', age: 23 },
        { name: 'Pooja', age: 21 },
        { name: 'Amit', age: 25 },
        { name: 'Neha', age: 22 },
        { name: 'Karan', age: 24 },
        { name: 'Simran', age: 20 },
        { name: 'Rohan', age: 26 }
    ];

    return User.insertMany(users);
})
.then(() => console.log("All users added!"))
.catch(err => console.error("Error:", err));
