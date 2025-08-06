const express = require("express");
const app = express();
const PORT = 3000;

// Home page 
app.get("/", (req, res) => {
  res.send("Home page");
});

// Hello function
app.get("/hello", (req, res) => {
  res.send("Hello World");
});

// Function for displaying time  
app.get("/time", (req, res) => {
  const currentTime = new Date().toLocaleString();
  res.send(`Current time on this server is : ${currentTime}`);
});

// Server 
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
