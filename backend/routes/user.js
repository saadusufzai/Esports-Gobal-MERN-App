// const router = require('express').Router()
// let User = require('../models/user.model')
// const crypto = require('crypto')

// router.route('/users').get((req,res)=>{
//     User.find()
//     .then((users)=> res.json(users))
//     .catch((err)=>res.status(400).json('Error: '+err.message))
// })


// router.route('/add').post((req,res) => {
//     const firstName = req.body.firstName
//     const lastName = req.body.lastName
//     const email = req.body.email
//     const password = req.body.password
//     const country = req.body.country
//     const city = req.body.city
//     const pubgId = req.body.pubgId
//     const phone = req.body.phone

//     const newUser = new User({
//         firstName: firstName,
//         lastName: lastName,
//         email: email,
//         password: password,
//         country: country,
//         city: city,
//         pubgId: pubgId,
//         phone: phone
//     })


//     newUser
//     .save()
//     .then(()=> res.json('User Registered'))
//     .catch((err)=> res.status(400).json('Error: ' + err))
// })

// module.exports = router

const Router = require('express')
const User = require('../models/user.model')

const router = Router()


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

  module.exports = router