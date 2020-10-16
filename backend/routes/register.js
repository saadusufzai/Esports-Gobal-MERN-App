const router = require('express').Router()
let User = require('../models/user.model')
const crypto = require('crypto')

router.route('/users').get((req,res)=>{
    User.find()
    .then((users)=> res.json(users))
    .catch((err)=>res.status(400).json('Error: '+err.message))
})


router.route('/add').post((req,res) => {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    const password = req.body.password
    const country = req.body.country
    const city = req.body.city
    const pubgId = req.body.pubgId
    const phone = req.body.phone

    const newUser = new User({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        country: country,
        city: city,
        pubgId: pubgId,
        phone: phone
    })


    newUser
    .save()
    .then(()=> res.json('User Registered'))
    .catch((err)=> res.status(400).json('Error: ' + err))
})

module.exports = router