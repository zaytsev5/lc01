const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const app = express();
const path = require('path')
const favicon = require('serve-favicon')
const { ensureAuthenticated, forwardAuthenticated ,ensureAuthenticatedForAdmin} = require('./config/auth');


const errorHandler = require('./api/v1/helpers/error-handler')
const routeAdmin = require('./routes/admin.route')
const routeUser = require('./routes/user.route')

const API_BenXe = require("./routes/admin.route/benxeRoutes");
const API_Xe = require("./routes/admin.route/xeRoutes");
const API_tuyenXe = require("./routes/admin.route/tuyenxeRoutes");
const API_ChuyenXe = require("./routes/admin.route/chuyenxeRoutes");
const API_KhachHang = require("./routes/admin.route/khachhangRoutes");
const API_ChiTietVeXe = require("./routes/admin.route/chitietvexeRoutes");
const API_ChiTietVeXeHuy = require("./routes/admin.route/chitietvexehuyRoute");
const API_HoaDon = require("./routes/admin.route/hoadonRoutes");
//const routesTaiKhoan = require('./routesAdmin/taikhoanRoutes');
const API_User = require("./routes/admin.route/userRoutes")



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
// app.use(require('cors')())


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
// app.use('/api/v1',require('./api/v1/'))
// app.use('/api/v1/admin',require('./api/v1/routes/admin'))
app.use('/', require('./routes/index.js'));
app.use('/user', routeUser);
// app.use('/', routeAdmin);

app.use('/static', express.static(path.join(__dirname, 'public')))


//Route Admin
app.get("/admin/allusers",ensureAuthenticatedForAdmin,function(req,res){
  res.render("admin/user");
});
app.get("/admin/tablebenxe",ensureAuthenticatedForAdmin,function(req,res){
  res.render("admin/tableBenXe");
});
app.get("/admin/tablexe",ensureAuthenticatedForAdmin,function(req,res){
  res.render("admin/tableXe");
});
app.get("/admin/tabletuyenxe",ensureAuthenticatedForAdmin,function(req,res){
  res.render("admin/tableTuyenXe");
});
app.get("/admin/tablechuyenxe",ensureAuthenticatedForAdmin,function(req,res){
  res.render("admin/tableChuyenXe");
});
app.get("/admin/tablekhachhang",ensureAuthenticatedForAdmin,function(req,res){
  res.render("admin/tableKhachHang");
});
app.get("/admin/tablevexe",ensureAuthenticatedForAdmin,function(req,res){
  res.render("admin/tableVeXe");
});
app.get("/admin/tablehoadon",ensureAuthenticatedForAdmin,function(req,res){
  res.render("admin/tableHoaDon");
});
app.get("/admin/editbenxe",ensureAuthenticatedForAdmin,function(req,res){
  res.render("admin/editBenXe");
});
app.get("/admin/editxe",ensureAuthenticatedForAdmin,function(req,res){
  res.render("admin/editXe");
});
app.get("/admin/edittuyenxe",ensureAuthenticatedForAdmin,function(req,res){
  res.render("admin/editTuyenXe");
});
app.get("/admin/editchuyenxe",ensureAuthenticatedForAdmin,function(req,res){
  res.render("admin/editChuyenXe");
});
app.get("/admin/editkhachhang",ensureAuthenticatedForAdmin,function(req,res){
  res.render("admin/editKhachHang");
});
app.get("/admin/statistical",function(req,res){
  res.render("admin/statistical");
});
app.get("/admin/huyve",ensureAuthenticatedForAdmin,function(req,res){
  res.render("admin/huyVeXe")
});app.get("/admin/duyetvehuy",ensureAuthenticatedForAdmin,function(req,res){
  res.render("admin/DuyetVeHuy")
});app.get("/admin/doanhthu",function(req,res){
  res.render("admin/tableDoanhThu")
});

// API_BenXe(app);
API_Xe(app);
API_tuyenXe(app);
API_ChuyenXe(app);
API_KhachHang(app);
API_ChiTietVeXe(app);
API_ChiTietVeXeHuy(app);
API_HoaDon(app);
// routesTaiKhoan(app);
API_User(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`[⚡️] - App ready on port ${PORT}`));

