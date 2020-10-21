const Router = require('express')
const User = require('../models/user.model')
const bcrypt = require("bcryptjs")

const router =Router.Router()


/**
 * @route   GET api/users
 * @desc    Get all users
 * @access  Private
 */


router.get('/', async (req, res) => {
    try {
      const users = await User.find();
      if (!users) throw Error('No users exist');
      res.json(users);
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  });


  /**
 * @route   GET api/users/id
 * @desc    Get specific user 
 * @access  Private
 */

  router.route("/:id").get((req, res) => {
    User.findById(req.params.id)
      .then((user) => res.json(user))
      .catch((err) => res.status(400).json("Error: " + err));
  });
  

  /**
 * @route   Delete api/users/id
 * @desc    User Deleted
 * @access  Private
 */


  router.route("/:id").delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
      .then(() => res.json("User Deleted !"))
      .catch((err) => res.status(400).json("Error: " + err));
  });
  

  /**
 * @route   GET api/users/update/:id
 * @desc    Get all users
 * @access  Private
 */


  router.route("/update/:id").post((req, res) => {
    User.findById(req.params.id)
      .then((user) => {
        const password = req.password;
        const salt = await bcrypt.genSalt(10);
        if (!salt) throw Error("Something went wrong with bcrypt");

        const hash = await bcrypt.hash(password, salt);
        if (!hash) throw Error("Something went wrong hashing password");

        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.country = req.body.country;
        user.city = req.body.city;
        user.pubgId = req.body.pubgId;
        user.phone = req.body.phone;
        user.password = hash
        user.date = Date.parse(req.body.date);
  
        user
          .save()
          .then(() => res.json("User updated !"))
          .catch((err) => res.status(400).json("Error: " + err));
      })
      .catch((err) => res.status(400).json("Error: " + err));
  });




  module.exports = router