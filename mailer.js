const nodemailer = require("nodemailer");

async function sendMailToNotifyCustomer(customer) {
  let content = contentMail()

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "shinminah357159@gmail.com", // generated ethereal user
      pass: "zaytsev@5", // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let mailOptions = {
    from: "[BusExpress.com] <shinminah357159@email.com>", // sender addresponses
    to: customer.email, // list of receivers
    subject: "BusExpress", // Subject line
    html: content, // html body
  };

  transporter.sendMail(mailOptions, (e, info) => {
    if (e) {
      throw new Error(e.message);
      // return res.send({status:false})
    }
    // console.log("Message sent: %s", info.messageId);
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // console.log("Sent!");
    console.log(" Sent to", customer.email);
  });
}

function contentMail(){
  return `<div class="wrap"><div class="main">
  <h1>AEROFLOT</h1>
  <ul>
    <li class="f_row"> <span class="moscow" data="Moscow">MOW  </span>
      <svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
        <path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
      </svg><span class="san" data="San Francisco">SFO</span>
    </li>
    <li class="s_row"> <span class="flight" data="Flight">SU106</span><span class="seat" data="Seat">13</span><span class="gate" data="Gate">37</span></li>
    <li class="t_row"> <span class="date" data="Date">26 NOV</span><span class="boarding" data="Boarding">22:09</span></li>
    <li class="fo_row"> <span class="passenger" data="Passenger">ARJUN KUNWAR</span></li>
    <li class="fi_row"> 
      <svg class="barcode" xmlns="http://www.w3.org/2000/svg"> 
        <path d="M6.834 11.549H1a1 1 0 0 0-1 1v66.236a1 1 0 0 0 1 1h5.834a1 1 0 0 0 1-1V12.549a1 1 0 0 0-1-1zM62.043 11.549h-4.168a1 1 0 0 0-1 1v66.236a1 1 0 0 0 1 1h4.168a1 1 0 0 0 1-1V12.549a1 1 0 0 0-1-1zM17 11.549h-4a1 1 0 0 0-1 1v66.236a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V12.549a1 1 0 0 0-1-1zM90.334 11.549h-4a1 1 0 0 0-1 1v66.236a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V12.549a1 1 0 0 0-1-1zM81.167 11.549h-2.724a1 1 0 0 0-1 1v66.236a1 1 0 0 0 1 1h2.724a1 1 0 0 0 1-1V12.549a1 1 0 0 0-1-1zM51.875 11.549h-4a1 1 0 0 0-1 1v66.236a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V12.549a1 1 0 0 0-1-1zM42.167 11.549h-2.5a1 1 0 0 0-1 1v66.236a1 1 0 0 0 1 1h2.5a1 1 0 0 0 1-1V12.549a1 1 0 0 0-1-1zM73.523 11.549H71.98a1 1 0 0 0-1 1v66.236a1 1 0 0 0 1 1h1.543a1 1 0 0 0 1-1V12.549a1 1 0 0 0-1-1zM33.667 11.549h-4a1 1 0 0 0-1 1v66.236a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V12.549a1 1 0 0 0-1-1zM23.667 11.549h-1a1 1 0 0 0-1 1v66.236a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V12.549a1 1 0 0 0-1-1zM67.227 11.549h-.363c-.551 0-1 .448-1 1v66.236c0 .552.449 1 1 1h.363c.551 0 1-.448 1-1V12.549c0-.552-.45-1-1-1z"></path>
      </svg>
      <svg class="barcode" xmlns="http://www.w3.org/2000/svg"> 
        <path d="M6.834 11.549H1a1 1 0 0 0-1 1v66.236a1 1 0 0 0 1 1h5.834a1 1 0 0 0 1-1V12.549a1 1 0 0 0-1-1zM62.043 11.549h-4.168a1 1 0 0 0-1 1v66.236a1 1 0 0 0 1 1h4.168a1 1 0 0 0 1-1V12.549a1 1 0 0 0-1-1zM17 11.549h-4a1 1 0 0 0-1 1v66.236a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V12.549a1 1 0 0 0-1-1zM90.334 11.549h-4a1 1 0 0 0-1 1v66.236a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V12.549a1 1 0 0 0-1-1zM81.167 11.549h-2.724a1 1 0 0 0-1 1v66.236a1 1 0 0 0 1 1h2.724a1 1 0 0 0 1-1V12.549a1 1 0 0 0-1-1zM51.875 11.549h-4a1 1 0 0 0-1 1v66.236a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V12.549a1 1 0 0 0-1-1zM42.167 11.549h-2.5a1 1 0 0 0-1 1v66.236a1 1 0 0 0 1 1h2.5a1 1 0 0 0 1-1V12.549a1 1 0 0 0-1-1zM73.523 11.549H71.98a1 1 0 0 0-1 1v66.236a1 1 0 0 0 1 1h1.543a1 1 0 0 0 1-1V12.549a1 1 0 0 0-1-1zM33.667 11.549h-4a1 1 0 0 0-1 1v66.236a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V12.549a1 1 0 0 0-1-1zM23.667 11.549h-1a1 1 0 0 0-1 1v66.236a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V12.549a1 1 0 0 0-1-1zM67.227 11.549h-.363c-.551 0-1 .448-1 1v66.236c0 .552.449 1 1 1h.363c.551 0 1-.448 1-1V12.549c0-.552-.45-1-1-1z"></path>
      </svg>
      <svg class="barcode" xmlns="http://www.w3.org/2000/svg"> 
        <path d="M6.834 11.549H1a1 1 0 0 0-1 1v66.236a1 1 0 0 0 1 1h5.834a1 1 0 0 0 1-1V12.549a1 1 0 0 0-1-1zM62.043 11.549h-4.168a1 1 0 0 0-1 1v66.236a1 1 0 0 0 1 1h4.168a1 1 0 0 0 1-1V12.549a1 1 0 0 0-1-1zM17 11.549h-4a1 1 0 0 0-1 1v66.236a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V12.549a1 1 0 0 0-1-1zM90.334 11.549h-4a1 1 0 0 0-1 1v66.236a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V12.549a1 1 0 0 0-1-1zM81.167 11.549h-2.724a1 1 0 0 0-1 1v66.236a1 1 0 0 0 1 1h2.724a1 1 0 0 0 1-1V12.549a1 1 0 0 0-1-1zM51.875 11.549h-4a1 1 0 0 0-1 1v66.236a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V12.549a1 1 0 0 0-1-1zM42.167 11.549h-2.5a1 1 0 0 0-1 1v66.236a1 1 0 0 0 1 1h2.5a1 1 0 0 0 1-1V12.549a1 1 0 0 0-1-1zM73.523 11.549H71.98a1 1 0 0 0-1 1v66.236a1 1 0 0 0 1 1h1.543a1 1 0 0 0 1-1V12.549a1 1 0 0 0-1-1zM33.667 11.549h-4a1 1 0 0 0-1 1v66.236a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V12.549a1 1 0 0 0-1-1zM23.667 11.549h-1a1 1 0 0 0-1 1v66.236a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V12.549a1 1 0 0 0-1-1zM67.227 11.549h-.363c-.551 0-1 .448-1 1v66.236c0 .552.449 1 1 1h.363c.551 0 1-.448 1-1V12.549c0-.552-.45-1-1-1z"></path>
      </svg>
    </li>
  </ul>
</div>
  <style>
.wrap {
  background-color: #f4f7ff;
}

*, *:before, *:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto Mono", monospace;
}

.main {
  background-color: #fff;
  width: 296px;
  height: 512px;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 8px;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 10px 2px #dee5f4;
  color: #3c4454;
  z-index: 9999999;
}

h1 {
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  height: 48px;
  background: #4985ff;
  font-size: 15.5px;
  text-align: center;
  line-height: 3.2;
  color: #fff;
  font-weight: 500;
  letter-spacing: 3.5px;
}

ul {
  padding: 16px 24px 26px 24px;
  height: calc(100% - 48px);
  list-style-type: none;
  z-index: 999;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 1fr);
}

li {
  position: relative;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 2.5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

li.f_row {
  font-weight: 500;
  font-size: 44px;
  letter-spacing: 9px;
  padding-bottom: 1px;
}
li.f_row .arrow {
  height: 20px;
  width: 30px;
  color: #989da6;
  opacity: 0.3;
}
li.f_row .san:after, li.f_row .moscow:after {
  bottom: -10px;
  position: absolute;
  content: attr(data);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.2px;
  color: #989da6;
}
li.f_row .san:after {
  right: 0;
}
li.f_row .moscow:after {
  left: 0;
}
li.f_row .san {
  width: 96px;
}

li.s_row {
  background: #f4f7ff;
  margin-top: 30px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  height: 80px;
  padding: 0px 16px 8px 16px;
}
li.s_row .flight {
  width: 50%;
}
li.s_row .flight, li.s_row .gate, li.s_row .seat {
  position: relative;
}
li.s_row .flight:after, li.s_row .seat:after, li.s_row .gate:after {
  top: -28px;
  left: 0;
  position: absolute;
  content: attr(data);
  font-weight: 500;
  letter-spacing: 0.2px;
  font-size: 13px;
}

li.t_row {
  overflow: visible;
  margin-top: 40px;
}
li.t_row .date, li.t_row .boarding {
  position: relative;
}
li.t_row .date:after, li.t_row .boarding:after {
  top: -27px;
  position: absolute;
  content: attr(data);
  font-weight: 500;
  letter-spacing: 0.2px;
  font-size: 13px;
}
li.t_row .date:after {
  left: 0;
}
li.t_row .boarding:after {
  right: 0;
}

li.fo_row {
  margin-top: 34px;
  text-transform: uppercase;
}
li.fo_row .passenger {
  position: relative;
}
li.fo_row .passenger:after {
  text-transform: none;
  top: -28px;
  left: 0;
  position: absolute;
  content: attr(data);
  font-weight: 500;
  letter-spacing: 0.2px;
  font-size: 13px;
}

li.fi_row {
  overflow: hidden;
  align-self: end;
  height: 45px;
  width: 100%;
}
li.fi_row svg.barcode {
  margin-right: 3px;
  fill: #3c4454;
  height: 200%;
  width: 100%;
}

 </style></div>`;

}
sendMailToNotifyCustomer({email: 'shinminah357159@gmail.com'})