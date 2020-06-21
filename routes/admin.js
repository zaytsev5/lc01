const express = require('express');
const bodyParser = require('body-parser')
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated ,ensureAuthenticatedForAdmin} = require('../config/auth');
const User = require('../models/User');
// const UserMysql = require('../models/UserMysql');
const Ticket = require('../models/Ticket')

router.get('/manage',ensureAuthenticatedForAdmin, (req, res)=>{
  res.render('manage', {
    user: req.user
  })
})

router.get('/ticketsCancled',ensureAuthenticatedForAdmin,(req, res) =>{
  console.log("Asas")
  Ticket.find().then(ticket =>{
    res.status(200).json(ticket)
  })
})

router.get('/approve/:id',(req, res)=>{
	Ticket.updateOne({MaVeXe:req.params.id},{$set:{TinhTrang:true}},(err,result)=>{
		if(err) return console.log(err)
		res.json(result)
	})
})

router.get('/approveall/:date',(req, res)=>{
  Ticket.updateMany({NgayHuy:req.params.date},{$set:{TinhTrang:true}},(err,result)=>{
    if(err) return console.log(err)
    res.json(result)
  })
})


module.exports = router;