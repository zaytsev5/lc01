const express = require('express');
const bodyParser = require('body-parser')
const fetch = require('node-fetch')
const router = express.Router();
const paypal = require('paypal-rest-sdk')
// const { ensureAuthenticated, forwardAuthenticated ,ensureAuthenticatedForAdmin} = require('../config/auth');
// const User = require('../models/User');
// const UserMysql = require('../models/UserMysql');
// const {doPayment, sendMailToCus,checkSeatAgain} = require('../config/payment');
// const Ticket = require('../models/Ticket')
// const nodemailer = require('nodemailer')
// const emailExistence = require('email-existence')
const DbService = require('./services/database.service');
const PmService = require('./services/payment.service')
// const { compare} = require('bcryptjs');




paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'AWgYYDvYvC35qGNvoTs8QDLUZdl8kmaOISELHK1lAA6GcEhjMc5eCR-c54eOVOLOuNyWQE7fpkoD5w_w',
  'client_secret': 'EDvXzdrHt_E6fWCdiE5ifE27TceUXVCcea9_iO3jl0u4XlFRiFYcrz1Lo6uXaLKKVZ0zOKGh9HfjQdc1'
});

// app.use(express.json)
// app.use(bodyParser.json())

router.use('/user',require('./routes/user.controller'))
router.use('/admin',require('./routes/admin.controller'))
router.use('/payment',require('./routes/payment.controller'))
// router.use('/v1/admin',require('./routes/admin'))

router.get('/seatsbooked',async(req, res) => {
  // endpoint /checkseats
  let seats = req.query.seats.split(',')
  console.log(` [🚌] - getting seatsbooked of ${req.query.postid}.`);
  // DbService.findSeatsBooked(req.query.postid,r =>{
  //   return res.json(r)
  // })
 const f = await PmService.finalCheckSeatStatus(req.query.postid, seats)
 return res.send(f)
  
})

router.get('/post',(req, res) => {
  console.log(` [ℹ] - getting post infos...`);
  const { id,scope } = req.query
  scope.includes('seats') // get booked seats of a post via post_id
  ? DbService.getSeatsBooked(id, (result) => {
    result
    ? res.status(200).json(result)
    : res.status(400).json({error: 'cannot get requestse...'})
  }) 
  : scope.includes('detailed') // get more specificed post info via post_id
  ? DbService.getPostDetailed(id,(result)=>{
    if(result) return res.status(200).json(result)
  }) : res.status(200).json({message:'cannot request with this url...'})
})
//get all trips
router.get('/trips',(req, res) => {
  console.log(` [🚌] - getting all trips...`);
  DbService.getAllTrips((entry) => {
    entry 
    ? res.status(200).json({entry})
    : res.status(400).json({error: 'failed to get trips.'})
  })
})


// same above
router.get('/posts', (req, res) => {
  console.log(" [ℹ] - finding post by date, time....");
  const {tripid, date, time} = req.query
  DbService.getPostByDateTime(tripid, date, time,(result) => {
    result
    ? res.status(200).json({result})
    : res.status(400).json({message:'failed to get..'})
  })
})

router.get('/trip', (req, res) => {
  console.log(` [🚌] - getting posts of a trip...`);
  const { tripid, date } = req.query
  DbService.getPostsOfTripByDate(tripid, date, (result) => {
    result
    ? res.status(200).json({result})
    : res.status(400).json({message: 'failed to get posts of trip..'})
  })
})

router.get('/ticket/check',(req, res) => {
  console.log(` [✔] - checking ticket...`);
  let { id} = req.query
  DbService.checkTicket(id, (result) => {
    result
    ? res.status(200).json({result})
    : res.status(400).json({message: 'failed to check ticket...'})
  })
})



module.exports = router;
