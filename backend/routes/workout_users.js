const router = require('express').Router()
let User = require('../models/users.model.js')


//get all the users in an array

router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users)) //output the json
    .catch(err => res.status(400).json('Error: +'+err))
})

//Function: add a user

router.route('/add').post((req,res) => {
    const username = req.body.username
    const password = req.body.password
    const fName = req.body.fName
    const lName = req.body.lName

    //CREATE A NEW USER
    const newUser = new User({username,password,fName,lName})
    //save entry into database
    newUser.save()
    .then(() => res.json("USER ADDED"))
    .catch(err => res.status(400).json('Error: +'+err))
})

module.exports = router

//Function a