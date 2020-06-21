const paypal = require('paypal-rest-sdk')
const nodemailer = require('nodemailer')
const UserMysql = require('../models/UserMysql');



module.exports = {
  doPayment: async function(response,request){
      const create_payment_json = {
          "intent": "sale",
          "payer": {
              "payment_method": "paypal"
          },
          "redirect_urls": {
              "return_url": "http://localhost:5000/success",
              "cancel_url": "http://localhost:5000/cancel"
          },
          "transactions": [{
              "item_list": {
                  "items": [{
                      "name": "Red Sox Hat",
                      "sku": "001",
                      "price": "5.00",
                      "currency": "USD",
                      "quantity": 1
                  }]
              },
              "amount": {
                  "currency": "USD",
                  "total": "5.00"
              },
              "description": 'Red tiger hat for devs'
          }]
      };

      paypal.payment.create(create_payment_json,async function (error, payment) {

        if (error) {
            throw error;
        } else {
          console.log("paying....")
            for(let k = 0;k < payment.links.length;k++){
              if(payment.links[k].rel === 'approval_url'){
                // console.log(payment.links[k].href)
                  return response.send({link:payment.links[k].href})
                // response.redirect(payment.links[i].href);
              }
            }
            console.log("hrere")
        }
      });
},
sendMailToCus: function (response,request,customer){
  UserMysql.getInfoPost(customer.MaCX,(result)=>{
    if(result.length > 0){
      const output = `
        <p>Thông báo đặt vé thành công</p>
        <h3>Bus Express</h3>
        <ul>  
          <li>From: Bus Express</li>
          <li>Email: buexpressbusiness@gmail.com</li>
          <li>Hot line: 19000153157</li>
          <li>Chuyến xe:${customer.ChuyenXe}</li>
          <li>Đi ngày:${new Date(result[0].NgayDi).toLocaleDateString()}</li>
          <li>Số Ghế:${customer.SLGhe.toString()}</li>
          <li>Xe:${customer.BienSoXe}</li>        
        </ul>
        `;

  // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'shinminah357159@gmail.com', // generated ethereal user
            pass: '01649254108'  // generated ethereal password
        },
        tls:{
          rejectUnauthorized:false
        }
      });

  // setup email data with unicode symbols
      let mailOptions = {
          from: '[BusExpress.com] <shinminah357159@email.com>', // sender addresponses
          to: customer.Email , // list of receivers
          subject: 'BusExpress', // Subject line
          text: 'Hello world?', // plain text body
          html: output // html body
      };

  // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            return ;
             // return response.send({status:false})
          }
          console.log('Message sent: %s', info.messageId);   
          console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
          console.log('Sent!')
          // response.send({status:true})
      });
    }
  })
  
},
checkSeatAgain:function(customer,UserMysql){
  return new Promise(resolve => {
    UserMysql.findSeat(customer.MaCX,(result) =>{
      if(result){
        for(let i in result){
          for(let k in customer.SLGhe){
            if(result[i].SoGhe == customer.SLGhe[k]) resolve(true)
          }
        }
        resolve(false)
      }
    })
  })
}

};

