// Require modules
const express = require("express");
const mongoose = require("mongoose");
const usersRouter = require("./routes/users.js");
const dotenv = require("dotenv").config();

// Create App
const app = express();

// Fetch ENV variables
const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL || "mongodb://localhost/users";

// Connect to Mongo
mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

// Mongo error handling
db.on("error", (error) => console.error(error));
db.once("open", () => {
  console.log("Database connected");
});

app.use(express.json());

// Router for users
app.use("/users", usersRouter);

// Root Route
app.get("/", (req, res) => {
  res.send(`Welcome to User REST API, Use http://localhost:${PORT}/users`);
});

// Listen to PORT
app.listen(PORT, () => {
  console.log(`Listening to http://localhost:${PORT}`);
});
