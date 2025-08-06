const express = require("express");
const app = express();
const PORT = 3000;

// Home page
app.get("/", (req, res) => {
  res.send("This is the home page");
});

// Addition Route
app.get("/add", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({
      error: "Invalid query parameters.Please provide numbers for 'a' and 'b'.",
    });
  }
  const result = a + b;
  res.json({ result });
});

// Subtraction Route
app.get("/sub", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (isNaN(a) || isNaN(b))
    return res.status(400).json({
      error: "Invalid query parameters.Please provide numbers for 'a' and 'b'.",
    });

  const result = a - b;
  res.json({ result });
});

// Multiplication Route
app.get("/mul", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (isNaN(a) || isNaN(b))
    return res.status(400).json({
      error: "Invalid query parameters.Please provide numbers for 'a' and 'b'.",
    });

  const result = a * b;
  res.json({ result });
});

// Division Route
app.get("/div", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (isNaN(a) || isNaN(b))
    return res.status(400).json({
      error: "Invalid query parameters.Please provide numbers for 'a' and 'b'.",
    });

  if (b === 0) {
    return res.status(400).json({
      error: "Cannot divide by zero",
    });
  }

  const result = a / b;
  res.json({ result });
});

// Server
app.listen(PORT, () => {
  console.log(`Server is runnig at PORT:${PORT}`);
});
