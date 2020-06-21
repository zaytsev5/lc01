'use strict';

var HoaDon = require('../modelsAdmin/hoadonModels.js');

exports.getAllHoaDon = function(req, res) {
    HoaDon.getAllHoaDon(function(err, hoadondatvexe) {

        console.log('controller')
        if (err) res.send(err);
       // console.log('res',hoadondatvexe);
        res.send(hoadondatvexe);
    });
};