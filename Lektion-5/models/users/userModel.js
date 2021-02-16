const mongoDB = require('mongoose');
const User = require('./userSchema');
const bcrypt = require('bcrypt');


exports.registerUser = (req, res) => {
  
  User.exists( { email: req.body.email }, (err, result) => {
    if(err) {
      return res.status(400).json(err)
    } else {

      if(result) {
        return res.status(400).json({
          statusCode: 400,
          status: false,
          message: 'Email address already in use'
        })
      }
      else {

        const salt = bcrypt.genSaltSync(10);
        bcrypt.hash(req.body.password, salt, (err, hash) => {

          if(err) {
            return res.status(500).json({
              statusCode: 500,
              status: false,
              message: 'failed to encrypt password'
            })
          }
          const newUser = new User ({
            firstName:    req.body.firstName,
            lastName:     req.body.lastName,
            email:        req.body.email,
            passwordHash: hash
        })

        newUser.save()
        .then(() => {
          res.status(201).json({
            statusCode: 201,
            status: true,
            message: 'User was successfully created'
          })
        })
        
        .catch(() => {
          res.status(500).json({
            statusCode: 500,
            status: true, 
            message: 'Failed to create user'
          })
        })


        })

      }
    }
  })

}