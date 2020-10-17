import { Router } from "express";
import bcrypt from "bcryptjs";
import config from "../../config";
import jwt from "jsonwebtoken";
import auth from "../../middleware/auth";
// User Model
import User from "../../models/User";

const { JWT_SECRET } = config;
const router = Router();

/**
 * @route   POST api/auth/login
 * @desc    Login user
 * @access  Public
 */

router.post("/login", async (req, res) => {
  const { phone, password } = req.body;

  // Validation
  if (!phone || !password) {
    return res.status(400).json({ msg: "Please enter all feilds" });
  }

  try {
    // Check exisitng User
    const user = await User.findOne({ phone });
    if (!user) throw Error("User does not exist");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw Error("Password does not match");

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: 3600 });
    if (!token) throw Error("Could not sign token");

    res.status(200).json({
      token,
      user: {
        id: user,
        _id,
        name: user.name,
        phone: user.phone,
        pubgId: user.pubgId,
        email: user.email,
        country: user.country,
        city: user.city,
      },
    });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

/**
 * @route   POST api/users
 * @desc    Register new user
 * @access  Public
 */

router.post("/register", async (req, res) => {
  const { firstName, lastName, phone, password } = req.body;

  // Validation

  if (!firstName || !lastName || !phone || !password) {
    return res.status(400).json({ msg: "Please enter all feilds" });
  }

  try {
    const user = await User.findOne({ phone });
    if (user) throw Error("User already exists");

    const salt = await bcrypt.genSalt(10);
    if (!salt) throw Error("Something went wrong with bcrypt");

    const hash = await bcrypt.hash(password, salt);
    if (!hash) throw Error("Something went wrong hashing password");

    const newUser = new User({
      firstName: firstName,
      lastName: lastName,
      email: req.body.email,
      password: hash,
      country: req.body.country,
      city: req.body.city,
      pubgId: req.body.pubgId,
      phone: phone,
    });

    const savedUser = await newUser.save();
    if (!savedUser) throw Error("Something went wrong saving the user");

    const token = jwt.sign({ id: savedUser._id }, JWT_SECRET, {
      expiresIn: 3600,
    });

    res.status(200).json({
      token,
      user: {
        id: savedUser._id,
        name: savedUser.name,
        email: savedUser.email,
        pubgId: savedUser.pubgId,
        phone: savedUser.phone,
      },
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/**
 * @route   GET api/auth/user
 * @desc    Get user data
 * @access  Private
 */

router.get("/user", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) throw Error("User does not exist");
    res.json(user);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

export default router;
