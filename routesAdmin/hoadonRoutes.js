'use strict';
module.exports = function(app) {
   var todoList = require('../controllers/hoadonControllers');
	
   app.route('/hoadon')
       .get(todoList.getAllHoaDon);

	
};