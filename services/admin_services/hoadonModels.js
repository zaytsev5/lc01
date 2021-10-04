'user strict';
var sql = require('../../database/connection');
;

//Task object constructor
var HoaDon = function(hoadondatvexe){
    console.log(hoadondatvexe);
    this.MaHD = hoadondatvexe.MaHD;
    this.MaVeXe = hoadondatvexe.MaVeXe;
    this.Email = hoadondatvexe.Email;
	this.NgayDat = hoadondatvexe.NgayDat;
};
HoaDon.getAllHoaDon = function getAllHoaDon(dates, MaTX, result) {
  let query = "SELECT tuyenxe.MaTX, tuyenxe.DiemDi, tuyenxe.DiemDen, COUNT(SoGhe) AS Total FROM tuyenxe, chuyenxe, vexe WHERE tuyenxe.MaTX = chuyenxe.MaTX and chuyenxe.MaCX = vexe.MaCX and chuyenxe.NgayDi >= ? and chuyenxe.NgayDi <= ? and tuyenxe.MaTX LIKE ? GROUP BY tuyenxe.MaTX ORDER BY Total DESC"
    sql.query(query,[...dates, `%${MaTX}`], function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
           // console.log('Ben Xe : ', res);
            console.log(res)
            result(null, res);
        }
    });
};
module.exports= HoaDon;