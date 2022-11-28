const express = require('express')
const router = express.Router()
const Users = require('../controllers/http/handlers/users')
const Greetings = require('../controllers/http/handlers/greetings')

module.exports = router
    //for greetings-modules
    .get('/hello', Greetings.get)

    //for users-module 
    .post('/users', Users.post)


    //for other-module