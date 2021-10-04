'use strict';

var VeXe = require('../../services/admin_services/chitietvexeModels');


exports.getAllVeXe = function(req, res) {
    VeXe.getAllVeXe(function(err, chitietvexe) {

        console.log('controller')
        if (err) res.send(err);
       // console.log('res', chitietvexe);
       return res.send(chitietvexe);
    });
};