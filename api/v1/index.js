const express = require('express');
const bodyParser = require('body-parser')
const fetch = require('node-fetch')
const router = express.Router();
const paypal = require('paypal-rest-sdk')
// const { ensureAuthenticated, forwardAuthenticated ,ensureAuthenticatedForAdmin} = require('../config/auth');
// const User = require('../models/User');
// const DbService = require('../models/DbService');

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
    ? res.status(200).json(entry)
    : res.status(400).json({error: 'failed to get trips.'})
  })
})


// same above
router.get('/posts', (req, res) => {
  console.log(" [ℹ] - finding post by date, time....");
  const {tripid, date, time} = req.query
  DbService.getPostByDateTime(tripid, date, time,(result) => {
    result
    ? res.status(200).json(result)
    : res.status(400).json({message:'failed to get..'})
  })
})

router.get('/m/posts', (req, res) => {
  console.log(" [ℹ] - finding post by date, time....<mobile-version>");
  const {tripid, date, time} = req.query
  let seats = []

  Array(30).fill(null).map((e,i) => {
    seats.push({
      code: `A${i +1}`,
      choose :'0'
    })
  })
  //  res.json(seats)

  DbService.getPostByDateTime(tripid, date, time,(result) => {
    if(result){
      result.map(e => {
        seats[parseFloat(e.SoGhe.slice(1,3)) - 1].choose = '1';
      })
       res.status(200).json(seats)
      // res.json({size:seats.length})
    }else
     res.status(400).json({message:'failed to get..'})
  })
})

router.get('/trip', (req, res) => {
  console.log(` [🚌] - getting posts of a trip...`);
  const { tripid, date } = req.query
  DbService.getPostsOfTripByDate(tripid, date, (result) => {
    result
    ? res.status(200).json(result)
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

router.post('/customer/insert',async (req, res) =>{
  // return PmService.doPayment(req,res)
  if(req.body){
    const {TenKH,Email,SDT,GioiTinh,DiaChi,SLGhe,DonGia,NgayDat,MaCX} = req.body; 
    customer = req.body;
    console.log(MaCX)
    let bind = [];
    bind.push(Email) 
    bind.push(TenKH) 
    bind.push(SDT) 
    bind.push(GioiTinh) 
    bind.push(DiaChi) 
    console.log(`[💺]-Số lượng ghế ${SLGhe.length}`)
    let next = true;
                
    if(req.user && req.user.role == "user"){
      console.log("[👋]-User has logged in.")
      // CHECK USER HAS BOOK ANY TICKET EVER?
       DbService.findUserByEmail(req.user.email,(result)=>{
          if(result.length > 0) return PmService.doPayment(req,res)
          else{
            console.log("[🆕]-first time booking.")
               DbService.save(bind,(result)=>{
                  if(result) {
                    return PmService.doPayment(req,res)
                  }
                  else return res.status(201).send({status:1})
                })
          }
       })
     
    }
    else 
        emailExistence.check(Email,(err, response)=>{
          if(response)
             DbService.findCusByEmail(Email, async (result)=>{
              if(result.length > 0){
                 console.log("[👋]-customer exist")
                 customer.Email = result[0].Email;
                 customer.TenKH = result[0].TenKH;
                 customer.SDT = result[0].SDT;
                 customer.DiaChi = result[0].DiaChi;
                 customer.GioiTinh = result[0].GioiTinh;
                 console.log(customer)
                 PmService.doPayment(req,res)

                
               
              }else{
                  console.log("[👋]-customer doesnt exist")
                    DbService.save(bind,(result)=>{
                        if(result) {
                          PmService.doPayment(req,res)                       
                        }
                        else return res.status(201).send({status:1})
                    })    
              }    
      
          })
           else return res.status(201).send({status:2})
        })

  
         

  }else{
   return res.send({status:1})
  }
});

router.get('/success',async  (req, res) => {
  console.log(customer)
  const payerId = req.query.PayerID;
  const paymentId = req.query.paymentId;
  if(customer == null) return res.redirect('home');

    let bind=[];
    const isMatched = await checkSeatAgain(customer,DbService);
    if(isMatched) return res.render("failed")

      for(let i = 0 ;i < customer.SLGhe.length ; i++){
          console.log(i)
           bind = []
          bind.push(customer.MaCX + customer.SLGhe[i]);
          bind.push(customer.MaCX);
          bind.push(customer.SLGhe[i]);
           DbService.saveTicket(bind,(result)=>{
            if(result){
              bind= [];
              bind.push(customer.MaCX + customer.SLGhe[i] )
              bind.push(customer.Email)
              bind.push(customer.NgayDat);

               DbService.saveBillTicket(bind,(result)=>{
                if(result){
                  // DbService.updateTickets(1,customer.MaCX,(result)=>{
                  //     if(result) {
                  //       // tickets.push(customer.MaCX + SLGhe[i]);
                  //       console.log("updated")
                  //       if(i == customer.SLGhe.length - 1){
                  //         sendMailToCus(res,req,customer)
                  //       }
                  //     }
                  //       else res.status(204).send({status:false})
                  //  })
                  if(i == customer.SLGhe.length - 1){
                    sendMailToCus(res,req,customer)
                  }
                }
                else res.status(204).send({status:false})

              })
            }else{
              return  res.send({status:false})

            }

          })
        }
        // const sendmail = await sendMailToCus();
        res.render('verified');
//     }
// });
});




module.exports = router;
