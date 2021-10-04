'use strict';
module.exports = function(app) {
   var todoList = require('../../controllers/admin.controller/hoadonControllers');

    app.route('/hoadon')
        .get(todoList.getDoanhThu);
};