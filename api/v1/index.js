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

module.exports = router;
