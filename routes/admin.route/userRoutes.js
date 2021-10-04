'use strict';
const express = require('express')
const router = express.Router()

module.exports = function(app) {
   //var todoList = require('../controllers/hoadonControllers');
   var User = require('../../models/Client');
  app.get('/getallUsers',(req,res)=>{
  	User.find().then(users => {
      console.log(users)
      return res.json(users)
    })
  })
};

// router.get('/getallUsers', (req, res) => {
//   var User = require('../../models/Client');
//   User.find().then(users => res.status(200).json(users))
// })

// module.exports = router