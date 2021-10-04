const paypal = require("paypal-rest-sdk");
const nodemailer = require("nodemailer");
const UserMysql = require("../models/mysql.service");
const jwt = require('jsonwebtoken')
const {
  DataSessionInstance,
} = require("twilio/lib/rest/wireless/v1/sim/dataSession");
const { resolve } = require("path");

//only for PAYPAL
paypal.configure({
  mode: "sandbox", //sandbox or live
  client_id:
    "AWgYYDvYvC35qGNvoTs8QDLUZdl8kmaOISELHK1lAA6GcEhjMc5eCR-c54eOVOLOuNyWQE7fpkoD5w_w",
  client_secret:
    "EDvXzdrHt_E6fWCdiE5ifE27TceUXVCcea9_iO3jl0u4XlFRiFYcrz1Lo6uXaLKKVZ0zOKGh9HfjQdc1",
});

module.exports = {
  doPayment: async function (req, res) {
    console.log("...do paypal");
    let { MaCX, SLGhe, NgayDat, Email } = req.body;
    let encode = await encodeData(req.body)
    // console.log(encode)
    const price = (req.body.DonGia / (23000 * req.body.SLGhe.length)).toFixed(2)
    const create_payment_json = {
      intent: "sale",
      payer: {
        payment_method: "paypal",
      },
      redirect_urls: {
        return_url: `http://localhost:5000/success?data=${encode}`,
        cancel_url: "http://localhost:5000/cancel",
      },
      transactions: [
        {
          item_list: {
            items: [
              {
                name: "Tickets Charge",
                sku: req.body.SLGhe.toString(),
                price: '' + price,
                currency: "USD",
                quantity: req.body.SLGhe.length,
              },
            ],
          },
          amount: {
            currency: "USD",
            total: '' + (price * req.body.SLGhe.length).toFixed(2),
          },
          description: "Thanh toán hóa đơn vé xe",
        },
      ],
    };

    paypal.payment.create(create_payment_json, async function (error, payment) {
      if (error) {
        console.log(error.message);
        return { status: 2 };
        // throw error;
      } else {
        console.log("paying....");
        for (let k = 0; k < payment.links.length; k++) {
          if (payment.links[k].rel === "approval_url") {
            // console.log(payment.links[k].href)
            return res.send({ link: payment.links[k].href });
            // res.redirect(payment.links[i].href);
          }
        }
      }
    });
  },
  sendMailToCus: function (data) {
    console.log("got this far....");
    // console.log(data)
    UserMysql.getInfoPost(data.MaCX, (result) => {
      if (result.length > 0) {
        const output = `
        <p>Thông báo đặt vé thành công</p>
        <h3>Bus Express</h3>
        <ul>  
          <li>From: Bus Express</li>
          <li>Email: buexpressbusiness@gmail.com</li>
          <li>Hot line: 19000153157</li>
          <li>Chuyến xe:${data.DiemDi + '-' + data.DiemDen }</li>
          <li>Đi ngày:${new Date(result[0].NgayDi).toLocaleDateString()}</li>
          <li>Số Ghế:${data.SLGhe.toString()}</li>
          <li>Xe:${data.BienSoXe}</li>        
        </ul>
        `;

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: "shinminah357159@gmail.com", // generated ethereal user
            pass: "Zaytsev5", // generated ethereal password
          },
          tls: {
            rejectUnauthorized: false,
          },
        });

        // setup email data with unicode symbols
        let mailOptions = {
          from: "[BusExpress.com] <shinminah357159@email.com>", // sender addresponses
          to: data.Email, // list of receivers
          subject: "BusExpress", // Subject line
          text: "Hello world?", // plain text body
          html: output, // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(error.message);
            return;
            // return res.send({status:false})
          }
          console.log("Message sent: %s", info.messageId);
          console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
          console.log("Sent!");
          // res.send({status:true})
        });
      }
    });
  },
  checkSeatAgain: function (data, UserMysql) {
    return new Promise((resolve) => {
      UserMysql.findSeatsBooked(data.MaCX, (result) => {
        if (result) {
          for (let i in result) {
            for (let k in data.SLGhe) {
              if (result[i].SoGhe == data.SLGhe[k]) resolve(true);
            }
          }
          resolve(false);
        }
      });
    });
  },
};
function encodeData(data) {
  return new Promise((resolve, reject) => {
    jwt.sign(data, "secretkey", (err, token) => {
      if (err)  return reject(err.message)
      // console.log(token)
       resolve(token)
    });
  })
}