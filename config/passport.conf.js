const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

// Load User model
const Client = require('../models/Client');

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      // return done(null, user);
      // Match user
       console.log(email);
      Client.findOne({
        email: email
      }).then(user => {
        if (!user) {
          console.log("wrong1");
          return done(null,false);
        }
      
        if(user.password !== password){
          console.log("wrong");
          return done(null, false)

        }
        console.log("im in");
        return done(null,user)

      //   // Match password
      //   // bcrypt.compare(password, user.password, (err, isMatch) => {
      //   //   if (err) throw err;
      //   //   if (isMatch) {
      //   //     return done(null, user);
      //   //   } else {
      //   //     return done(null, false, { message: 'Có lỗi! Mật khẩu không đúng' });
      //   //   }
      //   // });
      //   if(password == user.password){
      //     return done(null, user);
      //   }
      //   else return done(null, false, { message: ' Mật khẩu không đúng' });

      });
    })
  );

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    // User.findById(id, function(err, user) {
      // let user = {
      //   id:"01231",
      //   displayName: 'nguyenvanhai',
      //   nickname: "zaytsev5",
      //   email:  "shinminah357159"
      // }
      done(null, user);
    // });
  });
};
