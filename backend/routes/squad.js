const Router = require("express");
const Squad = require("../models/squad.model");

const router = Router.Router();

/**
 * @route   GET api/squad/
 * @desc    Get all users
 * @access  Private
 */

router.get("/", async (req, res) => {
  try {
    const users = await Squad.find();
    if (!users) throw Error("No users exist");
    res.json(users);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

/**
 * @route   GET api/squad/id
 * @desc    Get specific user
 * @access  Private
 */

router.route("/:id").get((req, res) => {
  Squad.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

/**
 * @route   Delete api/squad/id
 * @desc    Squad Deleted
 * @access  Private
 */

router.route("/:id").delete((req, res) => {
  Squad.findByIdAndDelete(req.params.id)
    .then(() => res.json("Squad Deleted !"))
    .catch((err) => res.status(400).json("Error: " + err));
});

/**
 * @route   GET api/squad/update/:id
 * @desc    Get all squad
 * @access  Private
 */

router.route("/update/:id").post((req, res) => {
  Squad.findById(req.params.id)
    .then((user) => {
      user.firstName = req.body.firstName;
      user.player2 = req.body.player2;
      user.player3 = req.body.player3;
      user.player4 = req.body.player4;
      user.country = req.body.country;
      user.city = req.body.city;
      user.phone = req.body.phone;
      user.feeStatus = req.body.status;

      user
        .save()
        .then(() => res.json("Squad updated !"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
