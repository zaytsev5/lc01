var mysql = require('mysql')
//ok got its
var connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password : '',
    database : 'booking_ticket'
})
connection.connect(function(err){
    if(err)  throw err;
    console.log('Done')
})
