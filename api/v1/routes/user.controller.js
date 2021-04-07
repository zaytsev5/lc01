const express = require('express');
const router = express.Router();
const passport = require('passport')
const { ensureAuthenticated, forwardAuthenticated, ensureAuthenticatedAdmin } = require('../helpers/authorize');
const User = require('../../../models/User');
const Ticket = require('../../../models/Ticket')
const USER_ACTIONS = require('../helpers/user.actions')
const ROLE = require('../helpers/role')


require('../../../config/passport.conf')(passport);


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

router.get('/me',  (req, res) => {
  req.user
  ? res.status(200).json(req.user)
  : res.sendStatus(404);
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

router.post('/booking/:tripId', ( req, res) => {
  let trip_id = req.params.tripId
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
    message: 'Failed to login.'
  })
})

router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/api/v1/user/me',
    failureRedirect: '/api/v1/user/login/error',
  })(req, res, next);
});

router.get('/logout', (req, res) => {
  req.logout();
  return res.status(200).json({
    status: 'OK',
    message: 'Logged out.'
  })
});

module.exports = router;