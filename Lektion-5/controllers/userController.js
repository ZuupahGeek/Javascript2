const router = require('express').Router();
const userModel = require('../models/users/userModel');


router.post('/register', userModel.registerUser);


module.exports = router;