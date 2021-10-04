'use strict';
const express = require('express')
const router = express.Router()

   var todoList = require('../../controllers/admin.controller/xeControllers');


	/*
	app.get('/biensoxe/:MaBX',(req,res)=>{
		let query=`Select * from xe where xe.MaBX = "${req.params.MaBX}" `;
	  	db.query(query,(err,result)=>{
		  	if(err) throw err;
		  	res.json(result);
	  	});
	});

	*/


   // todoList Routes
module.exports = function(app) {
    //var todoList = require('../controllers/hoadonControllers');
    var User = require('../../models/Client');
   app.get('/getallUsers',(req,res)=>{
     User.find().then(users => {
       console.log(users)
       return res.json(users)
     })
   })
   app.route('/biensoxe/:MaBX')
       .get(todoList.getXeByMaBX);
   app.route('/xe')
       .get(todoList.getAllXe)
       .post(todoList.createXe);

   app.route('/xe/:BienSoXe')
       .get(todoList.getXeById)
       .put(todoList.updateXeById)
       .delete(todoList.deleteXeById);
  //  appp.ro
 };
//    router.route('/biensoxe/:MaBX')
//        .get(todoList.getXeByMaBX);
//    router.route('/xe')
//        .get(todoList.getAllXe)
//        .post(todoList.createXe);

//    router.route('/xe/:BienSoXe')
//        .get(todoList.getXeById)
//        .put(todoList.updateXeById)
//        .delete(todoList.deleteXeById);
// module.exports = router;