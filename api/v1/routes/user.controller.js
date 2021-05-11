const express = require('express');
const router = express.Router();
const passport = require('passport')
const { ensureAuthenticated, forwardAuthenticated, ensureAuthenticatedAdmin } = require('../helpers/authorize');
const Client = require('../../../models/Client');
const Ticket = require('../../../models/Ticket')
const Review = require('../../../models/Review')
const USER_ACTIONS = require('../helpers/user.actions')
const ROLE = require('../helpers/role')
const DbService = require('../services/database.service')

require('../../../config/passport.conf')(passport);

let uid = null;

router.get('/tickets_cancled', ensureAuthenticated(ROLE.ADMIN), (req, res) => {

  Ticket.find().then(ticket => {
    res.status(200).json(ticket)
  })
})

router.get('/set_approved', ensureAuthenticated(ROLE.ADMIN), (req, res) => {

  req.query.date ? Ticket.updateMany({ NgayHuy: req.query.date }, { $set: { TinhTrang: true } }, (err, result) => {
    if (err) return console.log(err)
    res.json(result)
  })
    : Ticket.updateOne({ MaVeXe: req.query.id }, { $set: { TinhTrang: true } }, (err, result) => {
      if (err) return console.log(err)
      res.json(result)
    })
})

router.get('/me',ensureAuthenticated(ROLE.USER), (req, res) => {
  // ? res.status(200).json(req.user)
  // : res.status(404).json({
  //   message: 'not authorized...'
  // });
  return res.status(200).json(req.user)
})

router.post('/register',(req, res) =>{
  let new_client = new Client(req.body)
  Client.findOne({
    email: new_client.email
  }).then(user => {
    user
    ? res.status(400).json({message: 'email is being used, please use another...'})
    : new_client.save()
      .then((rs, err) => {
        if(err)
          return res.status(400).json({
            message: 'failed to register....'
          })
        return res.status(200).json({
          message: 'successed! you can log in now...'
        })
      })
    })
  

})

router.post('/me', ensureAuthenticated(ROLE.USER), (req, res) => {
  if (req.query.action === USER_ACTIONS.RESET_PASSWORD) {
    //some code change password
    return res.status(200).json({
      message: 'reset'
    })

  }
  if (req.query.action === USER_ACTIONS.CHANGE_PASSWORD) {
    //some code reset password
    return res.status(200).json({
      message: 'change'
    })

  }


})

router.get('/booked_tickets',ensureAuthenticated(ROLE.USER), (req, res) => {
  DbService.getAllTicketsByEmail(req.user.email, (result) => {
    if(result) return res.status(200).json(result)
    return res.status(400).json({
      message: 'failed to get request....'
    })
  })
})

router.post('/booking/:trip_id', ( req, res) => {
  let trip_id = req.params.trip_id
  let infos = req.body
  console.log(req.user);
  console.log(infos);
  return res.json({
    status: 'OK'
  })
})


router.get('/login/error', (req, res) => {
  return res.status(400).json({
    type: 'error',
    message: 'Falied to login, maybe wrong crenditals'
  })
})

router.post('/login', (req, res, next) => {
  console.log("someone trynna logging in");
  passport.authenticate('local', {
    successRedirect: '/api/v1/user/me',
    failureRedirect: '/api/v1/user/login/error',
  })(req, res, next);
});

router.post('/m/login', (req, res, next) => {
  let { email, password} = req.body
  console.log("someone trynna logging in");
  Client.findOne({
    email: email
  }).then(user => {
    if (!user) {
      return res.status(401).json({
        msg : 'unauthorized...'
      })
    }
    uid = email;
    return res.status(200).json(user)
  })
});

router.get('/logout', (req, res) => {
  req.logout();
  return res.status(200).json({
    message: 'you just have logged out...'
  })
});

router.get('/tickets',async (req, res) =>{
         DbService.getAllTicketsByEmail('thanhhien2498@gmail.com',(result)=>{
            if(result) return res.status(200).json(result)
         })
    //  }
        
 //  });
 
})

router.post('/review',ensureAuthenticated(ROLE.USER),(req, res) => {
  const {plate, stars} = req.body
  // console.log(`Yo`);
  let new_review =  new Review(req.body)

  Review.findOne({
    plate: req.body.plate
  }).then((rs, err) => {
    if(err) return res.status(400).json({msg: 'failed to request..'})
    if(rs){
      Review.updateOne({'plate': plate},{$set: { 'times' : rs.times + 1,'stars': rs.stars + stars}},(err, rs) =>{
        if(err) return res.status(400).json({error:err.message})
        return res.status(200).json({msg:'reviewed successfully...'})
      })
    }else{
      new_review.save()
      .then((rs, err) => {
        if(err) return res.status(400).json({message: 'failed to review...'})
        return res.status(200).json({
          message: `reviewed successfully..`
        })
      })
    }
  })
  
})




module.exports = router;