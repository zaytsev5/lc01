const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const app = express();
const path = require('path')
const favicon = require('serve-favicon')

const errorHandler = require('./api/v1/helpers/error-handler')
const routeAdmin = require('./routes/admin')
const routeUser = require('./routes/users')

const API_BenXe = require('./routesAdmin/benxeRoutes');
const API_Xe = require('./routesAdmin/xeRoutes');
const API_tuyenXe = require('./routesAdmin/tuyenxeRoutes');
const API_ChuyenXe = require('./routesAdmin/chuyenxeRoutes');
const API_KhachHang = require('./routesAdmin/khachhangRoutes');
const API_ChiTietVeXe = require('./routesAdmin/chitietvexeRoutes');
const API_ChiTietVeXeHuy = require('./routesAdmin/chitietvexehuyRoute');
const API_HoaDon = require('./routesAdmin/hoadonRoutes');
//const routesTaiKhoan = require('./routesAdmin/taikhoanRoutes');
const API_User = require('./routesAdmin/userRoutes')



const db = require('./config/mongodb.key').mongoURI;
  
app.use(express.json())
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);
// EJS
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(favicon(path.join(__dirname,'public','images','favicon.ico')))


// Express body parser
app.use(express.urlencoded({ extended: true }));
// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);
app.use(errorHandler)
app.use(require('cors')())


// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());



// Global constiables

app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

//connecting MongoDB
mongoose
.connect(
  db,
  { useNewUrlParser:true,useUnifiedTopology: true},
  
  )
  .then(() => console.log('[⚡️] - MongoDB Connected'))
  .catch(err => console.log(err));

// Routes User
app.use('/api/v1',require('./api/v1/'))
// app.use('/api/v1/admin',require('./api/v1/routes/admin'))
app.use('/', require('./routes/index.js'));
app.use('/user', routeUser);
app.use('/admin', routeAdmin);
app.use('/static', express.static(path.join(__dirname, 'public')))


//Route Admin


API_BenXe(app);
API_Xe(app);
API_tuyenXe(app);
API_ChuyenXe(app);
API_KhachHang(app);
API_ChiTietVeXe(app);
API_ChiTietVeXeHuy(app);
API_HoaDon(app);
//routesTaiKhoan(app);
API_User(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`[⚡️] - App ready on port ${PORT}`));

