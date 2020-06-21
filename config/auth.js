module.exports = {
  ensureAuthenticated: function(req, res, next) {
    if (req.isAuthenticated()) {
            return next()
    }
    req.flash('error_msg', 'Vui lòng đăng nhập');
    res.redirect('/user/account#dangnhap');
  },
  forwardAuthenticated: function(req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    }
  //  console.log(req.user)
    res.redirect('/home');      
  },
  ensureAuthenticatedForAdmin:function(req, res, next){
    if (req.isAuthenticated()) {
     //// console.log(req.user)
      if(req.user.role === 'admin')
          return next();
       return res.redirect('/home')

    }
     req.flash('error_msg', 'Vui lòng đăng nhập');
    res.redirect('/user/account#dangnhap');

    
  },
  ensureAuthenticatedForUser:function(req, res, next){
    if (req.isAuthenticated()) {
     //// console.log(req.user)
      if(req.user.role === 'user')
          return next();
       return res.redirect('/home')

    }
     req.flash('error_msg', 'Vui lòng đăng nhập');
    res.redirect('/user/account#dangnhap');

    
  }


};
