// Require modules
const express = require("express");
const router = express.Router();
const User = require("../models/user");

// Middleware
async function getUser(req, res, next) {
  let user;
  try {
    user = await User.findById(req.params.id);
    if (user == null)
      return res.status(404).json({ message: "Cannot find user" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  res.user = user;
  next();
}

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get user by ID
router.get("/:id", getUser, (req, res) => {
  res.json(res.user);
});

// Create a user
router.post("/", async (req, res) => {
  let user;
  if (req.body.married != null) {
    user = new User({
      name: req.body.name,
      age: req.body.age,
      city: req.body.city,
      married: req.body.married,
    });
  } else {
    user = new User({
      name: req.body.name,
      age: req.body.age,
      city: req.body.city,
    });
  }
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a user
router.patch("/:id", getUser, async (req, res) => {
  if (req.body.name != null) {
    res.user.name = req.body.name;
  }
  if (req.body.age != null) {
    res.user.age = req.body.age;
  }
  if (req.body.city != null) {
    res.user.city = req.body.city;
  }
  if (req.body.married != null) {
    res.user.married = req.body.married;
  }

  try {
    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a user
router.delete("/:id", getUser, async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: "Deleted User" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
