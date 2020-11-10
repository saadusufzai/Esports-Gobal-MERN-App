const  router  = require("express").Router()
const bcrypt = require("bcryptjs")
const config = require("../config")
const jwt = require("jsonwebtoken")
const auth = require("../middleware/auth")
// User Model
const User = require("../models/user.model")

const  JWT_SECRET  = process.env.JWT_SECRET
// const router = Router();//

/**
 * @route   POST api/auth/login
 * @desc    Login user
 * @access  Public
 */

router.route("/login").post( async (req, res) => {
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
        id: user._id,
        firstName:user.firstName,
        lastName:user.lastName,
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
 * @route   POST api/auth/users
 * @desc    Register new user
 * @access  Public
 */

router.post("/users", async (req, res) => {
  const { firstName, phone, password } = req.body;

  // Validation

  if (!firstName || !phone || !password) {
    return res.status(400).json({ msg: "Please enter all feilds" });
  }

  try {
    const phoneN = await User.findOne({ phone});
    if (phoneN) return res.status(400).json({ msg:"Phone Number already exists"});

    // const emailN = await User.findOne({ email });
    // if (emailN)  return res.status(400).json({ msg:"Phone Number already exists"});


    const salt = await bcrypt.genSalt(10);
    if (!salt) throw Error("Something went wrong with bcrypt");

    const hash = await bcrypt.hash(password, salt);
    if (!hash) throw Error("Something went wrong hashing password");

    const newUser = new User({
      firstName: firstName,
      player2:req.body.player2,
      player3:req.body.player3,
      player4:req.body.player4,
      phone: phone,
      country: req.body.country,
      city: req.body.city,
      password: hash,
      // pubgId: req.body.pubgId,
      // lastName: lastName,
      // email: req.body.email,
      feeStatus:false
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
        name: savedUser.firstName,
        team:{ 
            player2:savedUser.player2
        },
        // email: savedUser.email,
        // pubgId: savedUser.pubgId,
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

module.exports = router
