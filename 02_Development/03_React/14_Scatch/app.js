require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");

// Add error handling for require statements
try {
  const indexRouter = require("./routes/index");
  const ownersRouter = require("./routes/ownersRouter");
  const productsRouter = require("./routes/productRouter");
  const usersRouter = require("./routes/usersRouter");
  const db = require("./config/mongoose-connection");
  const expressSession = require("express-session");
  const flash = require("connect-flash");

  // Session configuration
  app.use(
    expressSession({
      secret: process.env.SESSION_SECRET || "your-secret-key",
      resave: false,
      saveUninitialized: false,
      cookie: { secure: false },
    })
  );

  // Flash messages
  app.use(flash());

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, "public")));
  app.set("view engine", "ejs");

  app.use("/", indexRouter);
  app.use("/owners", ownersRouter);
  app.use("/users", usersRouter);
  app.use("/products", productsRouter);

  app.listen(3000, () => {
    console.log("🚀 Server started on http://localhost:3000");
  });
} catch (error) {
  console.error("❌ Application crashed:", error.message);
  console.error("📍 Stack trace:", error.stack);
  process.exit(1);
}
